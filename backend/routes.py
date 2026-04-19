from flask import Blueprint, request, jsonify
from models import db, Customer, Reservation, NewsletterSubscriber
import random
from datetime import datetime

api_bp = Blueprint('api', __name__)

MAX_TABLES = 30

@api_bp.route('/reservations', methods=['POST'])
def create_reservation():
    data = request.json
    
    time_slot_str = data.get('timeSlot')
    guests = data.get('guests')
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone', '')
    
    if not all([time_slot_str, guests, name, email]):
        return jsonify({"error": "Missing required fields."}), 400
        
    try:
        # Assuming timeSlot is in ISO format
        time_slot = datetime.fromisoformat(time_slot_str.replace('Z', '+00:00'))
    except ValueError:
        return jsonify({"error": "Invalid time slot format."}), 400

    existing_reservations = Reservation.query.filter_by(time_slot=time_slot).all()
    if len(existing_reservations) >= MAX_TABLES:
        return jsonify({"error": "Time slot is fully booked. Please select another time."}), 409
        
    occupied_tables = {r.table_number for r in existing_reservations}
    available_tables = [t for t in range(1, MAX_TABLES + 1) if t not in occupied_tables]
    
    if not available_tables:
        return jsonify({"error": "No tables available."}), 409
        
    table_number = random.choice(available_tables)
    
    customer = Customer.query.filter_by(email=email).first()
    if not customer:
        customer = Customer(name=name, email=email, phone=phone)
        db.session.add(customer)
        db.session.commit()
    
    reservation = Reservation(
        customer_id=customer.id,
        time_slot=time_slot,
        table_number=table_number,
        guests=int(guests)
    )
    db.session.add(reservation)
    db.session.commit()
    
    return jsonify({
        "message": "Reservation confirmed!",
        "reservation_id": reservation.id,
        "table_number": table_number,
        "time_slot": time_slot.isoformat()
    }), 201

@api_bp.route('/newsletter', methods=['POST'])
def subscribe_newsletter():
    data = request.json
    email = data.get('email')
    if not email:
        return jsonify({"error": "Email is required."}), 400
        
    existing = NewsletterSubscriber.query.filter_by(email=email).first()
    if existing:
        return jsonify({"message": "Already subscribed."}), 200
        
    new_sub = NewsletterSubscriber(email=email)
    db.session.add(new_sub)
    try:
        db.session.commit()
        return jsonify({"message": "Successfully subscribed to the newsletter!"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Internal server error."}), 500
