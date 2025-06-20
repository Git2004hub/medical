from flask import Flask
from flask_cors import CORS
from mongo_config import init_mongo, get_db
from neo4j_config import init_neo4j, get_driver

from routes.utilisateur_routes import init_routes
from routes.patient_routes import init_patient_routes
from routes.medecin_routes import init_medecin_routes

from routes.rendezvous_routes import rdv_bp
from routes.consultation_routes import cons_bp

def create_app():
    app = Flask(__name__)
    CORS(app)  # Autorise toutes les origines par défaut
    # Initialiser MongoDB et Neo4j
    init_mongo(app)
    init_neo4j()
    
    # Enregistrer les blueprints
    app.register_blueprint(rdv_bp)
    app.register_blueprint(cons_bp)

    # Initialisation des routes personnalisées utilisateur
    init_routes(app, get_db(), get_driver())
    init_patient_routes(app, get_db())
    init_medecin_routes(app, get_db())
    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)








