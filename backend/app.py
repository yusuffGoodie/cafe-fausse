from flask import Flask
from flask_cors import CORS
from config import Config
from models import db
from routes import api_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    CORS(app)
    db.init_app(app)
    
    app.register_blueprint(api_bp, url_prefix='/api')
    
    with app.app_context():
        # Will be created by psql or explicitly via flask shell
        # db.create_all()
        pass

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000)
