import './index.css'


function DevCard ({name, age, country}) {
     return (
          <div className="dev-card">
               <p>Dev: {name}</p>
               <p>Idade: {age}</p>
               <p>País: {country}</p>
          </div>
     )
}

export default DevCard