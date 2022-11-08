import Table from "react-bootstrap/Table";
import "./Table.css";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
function BasicExample() {
  return (
    <div className="card1">
   <div className="cardh" >
      <h2><div class="txt1">All Phones</div></h2>
    </div>
      <div style={{padding:100}}>
      <Table bordered className="phone-table" style={{backgroundColor:'white'}}>
        <thead>
          <tr>
            <th>Phone_id</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Image</th>
            <th>Price</th>
            <th>Portfolio Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>One Plus Nord 5</td>
            <td>One Plus</td>
            <td>/url</td>
            <td>56,000</td>
            <td>Portfolio name</td>
            <td>
              <EditButton />
              <DeleteButton />
            </td>
          </tr>
          <tr>
            <td>01</td>
            <td>One Plus Nord 5</td>
            <td>One Plus</td>
            <td>/url</td>
            <td>56,000</td>
            <td>Portfolio name</td>
            <td>
              <EditButton />
              <DeleteButton />
            </td>
          </tr>
          <tr>
            <td>01</td>
            <td>One Plus Nord 5</td>
            <td>One Plus</td>
            <td>/url</td>
            <td>56,000</td>
            <td>Portfolio name</td>
            <td>
              <EditButton />
              <DeleteButton />
            </td>
          </tr>
          <tr>
            <td>01</td>
            <td>One Plus Nord 5</td>
            <td>One Plus</td>
            <td>/url</td>
            <td>56,000</td>
            <td>Portfolio name</td>
            <td>
              <EditButton />
              <DeleteButton />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    </div>
    
  );
}

export default BasicExample;
