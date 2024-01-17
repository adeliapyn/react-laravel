import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Album() {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/album').then(res => {
        console.log(res);
        setAlbum(res.data.album);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  var AlbumDetails = "";
  if (Array.isArray(album)) {
    AlbumDetails = album.map((item, index) => (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.namaAlbum}</td>
        <td>{item.deskripsi}</td>
        <td>{item.tanggaldibuat}</td>
        <td>{item.userID}</td>
        <td>
        <Link to="/" className='btn btn-success' key={`edit-${index}`}>
        Edit
        </Link>
        </td>
        <td>
        <button className="btn btn-danger" key={`delete-${index}`}>
        Delete
        </button>

        </td>
      </tr>
    ));
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Album List
                <Link to="/add-user" className='btn btn-primary float-end'>
                  Add album
                </Link>
              </h4>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>namaAlbum</th>
                    <th>deskripsi</th>
                    <th>tanggaldibuat</th>
                    <th>userID</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {AlbumDetails}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Album;