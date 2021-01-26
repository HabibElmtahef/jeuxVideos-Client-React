import {React, useState} from 'react';
import { useHistory }  from 'react-router-dom';
import  './AddGame.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios'

const AddGame = () => {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    //const { history } = useHistory();


    const addGame = async (e) => {

        e.preventDefault();
        if(title == '' || description == '' || image == ''){
            toast.error("Something Wrong")
            
        }
        else {

        const res = await fetch(`http://localhost:4000/api/addGame`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          image,
        }),
      });
      await res.json();

      toast.success("Saved Succeful")

        }
        
        //let history = useHistory();
        //history.push('/')
    }

    return (
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <div className="card">
                    <div className="card-body">
                        <form action="" onSubmit={addGame}>
                        <div className="form-group">
                            <input type="text" name="title" value={title} placeholder="Title" className="form-control" autoFocus onChange={(e) => setTitle(e.target.value)} />
                        </div>
                         <div className="form-group">
                             <textarea name="description" value={description} rows="2" placeholder="Description" className="form-control" onChange={(e) => setDescription(e.target.value)} ></textarea>
                         </div>
                         <div className="form-group">
                             <input type="url" name="image" placeholder="Image" value={image} className="form-control" onChange={(e) => setImage(e.target.value)} />
                         </div>
                         <button className="btn btn-success btn-block" onClick={(e) => addGame} >SAVE</button>
                            
                         <ToastContainer/>                   
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card card-body text-center">
                    <img src={image == '' ? 'https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-no-image-available-icon-flat-vector.jpg' : image } className="card-img-top imgg"/>
                    <h3> {title == '' ? 'Game Title' : title } </h3>
                    <p> {description == '' ? 'Write your Description' : description} </p>
                    
                </div>
            </div>
        </div>
    )
}

export default AddGame;
