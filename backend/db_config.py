from pymongo import MongoClient
from neo4j import GraphDatabase

# ----- MongoDB Atlas -----
'''
def init_mongodb():
    MONGO_URI = "mongodb+srv://aymanelouahi:ELmlFvLByEDm58du@cluster0.8uxa82k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    mongo_client = MongoClient(MONGO_URI)
    mongo_db = mongo_client["gestion_medicale"]  # nom de ta base MongoDB
    return mongo_db

# ----- Neo4j AuraDB -----

def init_neo4j():
    NEO4J_URI = "neo4j+s://b46b6ab1.databases.neo4j.io"
    NEO4J_USER = "neo4j"
    NEO4J_PASSWORD = "LJqTxPZHDkLXDngYOlm30zZnF6mUw04Uv37XKrDdmS4"
    neo4j_driver = GraphDatabase.driver(NEO4J_URI, auth=(NEO4J_USER, NEO4J_PASSWORD))
    return neo4j_driver
'''
def init_mongodb():
    MONGO_URI = "mongodb+srv://admin:LuTUDs7Ht22F9vhx@cluster0.bgygfpw.mongodb.net/medical_db"
    mongo_client = MongoClient(MONGO_URI)
    mongo_db = mongo_client["medical_db"]  # nom de ta base MongoDB
    return mongo_db

# ----- Neo4j AuraDB -----

def init_neo4j():
    NEO4J_URI = "neo4j+s://6f418910.databases.neo4j.io"
    NEO4J_USER = "neo4j"
    NEO4J_PASSWORD = "m1H8eAs4l_ErJZuy7Vo7C0FMYk9qKWXpgKeoPiWjdGM"
    neo4j_driver = GraphDatabase.driver(NEO4J_URI, auth=(NEO4J_USER, NEO4J_PASSWORD))
    return neo4j_driver