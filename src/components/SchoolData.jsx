import React,{useEffect, useState} from 'react';


const SchoolData = () => {
    const [school, setSchool] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('../data.json');
                const data = await response.json();
                setSchool(data);
            }catch(error){
                console.log('Une erreur s\'est produite')
            }
        };

        fetchData();
    }, []);

    if(!school){
        return <div>Chargement en cours...</div>
    }
    return ( 
        <>
            <div className="card">
                Logo
            </div>
            <div className="infos-school">
                <h3>Informations</h3>
                <p>Adresse: {school.addresse}</p>
                <p>Téléphone: {school.telephone}</p>
                <p>Mail: {school.mail}</p>
                <p>{school.description}</p>
                <p>Site Web: {school.site}</p>
            </div>
        </>
     );
}
 
export default SchoolData ;