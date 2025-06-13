from flask import Blueprint, request, jsonify
from werkzeug.exceptions import NotFound

medecin_routes = Blueprint('medecin_routes', __name__)
medecin_id_counter = 0

def init_medecin_routes(app, mongo_db):
    global medecin_id_counter
    medecins_collection = mongo_db["medecins"]

    @medecin_routes.route('/medecins/post', methods=['POST'])
    def ajouter_medecin():
        global medecin_id_counter
        data = request.get_json()
        if not data:
            return jsonify({"message": "Données manquantes"}), 400

        medecin_id_counter += 1
        data['medecin_id'] = medecin_id_counter

        medecins_collection.insert_one(data)
        return jsonify({"message": "Médecin ajouté", "medecin_id": data['medecin_id']}), 201

    @medecin_routes.route('/medecins/get', methods=['GET'])
    def get_medecins():
        medecins = list(medecins_collection.find({}, {'_id': 0}))
        return jsonify(medecins), 200

    @medecin_routes.route('/medecins/delete/<int:medecin_id>', methods=['DELETE'])
    def delete_medecin(medecin_id):
        result = medecins_collection.delete_one({'medecin_id': medecin_id})
        if result.deleted_count == 0:
            raise NotFound("Médecin non trouvé")
        return jsonify({"message": "Médecin supprimé"}), 200
    
     # Nouvelle route PUT pour mettre à jour un médecin
    @medecin_routes.route('/medecins/update/<int:medecin_id>', methods=['PUT'])
    def update_medecin(medecin_id):
        data = request.get_json()
        if not data:
            return jsonify({"message": "Données manquantes"}), 400

        result = medecins_collection.update_one(
            {'medecin_id': medecin_id},
            {'$set': data}
        )

        if result.matched_count == 0:
            raise NotFound("Médecin non trouvé")

        return jsonify({"message": "Médecin mis à jour"}), 200

    app.register_blueprint(medecin_routes)
