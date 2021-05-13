var users = 
[
    {
        "_id": -1, 
        "rated_questions": []      
    },
    {
        "_id": 1, 
        "rated_questions": []      
    },
    {
        "_id": 2,    
        "rated_questions": []   
    },
    {
        "_id": 3, 
        "rated_questions": []         
    },
    {
        "_id": 4,  
        "rated_questions": []        
    },
    {
        "_id": 5,   
        "rated_questions": []       
    },
];

//Conectarse a la base de datos
db = connect("localhost:27017/admin");

//Usuario y contraseña
db.auth('almi', 'Almi123');

//Seleccionar BBDD
db = db.getSiblingDB('trivialmi');

//Vaciar bbdd
db.users.drop();

//Insertar datos
db.users.insert(users);
