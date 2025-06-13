from flask import Blueprint, request, jsonify
from werkzeug.exceptions import NotFound

patient_routes = Blueprint('patient_routes', __name__)
id_counter = 0

def init_patient_routes(app, mongo_db):
    patients_collection = mongo_db["patients"]

    @patient_routes.route('/patients/add', methods=['POST'])
    def add_patient():
        global id_counter
        data = request.get_json()
        if not data:
            return jsonify({"message": "Aucune donnée fournie"}), 400

        id_counter += 1
        data['patient_id'] = id_counter
        patients_collection.insert_one(data)
        return jsonify({"message": "Patient ajouté", "patient_id": id_counter}), 201

    @patient_routes.route('/patients/all', methods=['GET'])
    def get_all_patients():
        patients = list(patients_collection.find({}, {'_id': 0}))
        return jsonify(patients), 200

    @patient_routes.route('/patients/delete/<int:patient_id>', methods=['DELETE'])
    def delete_patient(patient_id):
        result = patients_collection.delete_one({'patient_id': patient_id})
        if result.deleted_count == 0:
            raise NotFound("Patient non trouvé")
        return jsonify({"message": "Patient supprimé"}), 200
    
    @patient_routes.route('/patients/update/<int:patient_id>', methods=['PUT'])
    def update_patient(patient_id):
        data = request.get_json()
        if not data:
            return jsonify({"message": "Données manquantes"}), 400

        result = patients_collection.update_one({'patient_id': patient_id}, {'$set': data})
        if result.matched_count == 0:
            raise NotFound("Patient non trouvé")

        return jsonify({"message": "Patient mis à jour"}), 200

    app.register_blueprint(patient_routes)
