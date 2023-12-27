<h1>DEFAULT DIAGRAMS</h1>

<p><strong>Description: </strong> 
The purpose of creating this project is to store the spelling formats of some commonly used Express and Rest systems. Anyone who wants can benefit from this small project and use its contents.</p>

<br>
<h3>CRUD (Rest)</h3>

  <h3>CREATE</h3>
  <br>
  <table>
    <tr>
      <td>1.</td>
      <td>Create a new instance of "schema" and assign the details.</td>
    </tr>
    <tr>
      <td>2.</td>
      <td>Save the item to the database.</td>
    </tr>
    <tr>
      <td>3.</td>
      <td>Return the saved item.</td>
    </tr>
  </table>

  <h3>READ (all)</h3>
  <table>
    <tr>
      <td>1.</td>
      <td>Retrieve all the items from the database.</td>
    </tr>
    <tr>
      <td>2.</td>
      <td>Returns all items.</td>
    </tr>
  </table>

  <h3>READ (specific)</h3>
  <table>
    <tr>
      <td>1.</td>
      <td>Retrieve a specific item from the database using the ID.</td>
    </tr>
  </table>

  <h3>UPDATE (specific)</h3>
  <table>
    <tr>
      <td>1.</td>
      <td>Find the specific item in the database using the ID.</td>
    </tr>
    <tr>
      <td>2.</td>
      <td>If the item isn't found, return an error message.</td>
    </tr>
    <tr>
      <td>3.</td>
      <td>Update the item using the new details.</td>
    </tr>
  </table>

  <h3>DELETE (specific)</h3>
  <table>
    <tr>
      <td>1.</td>
      <td>Find the specific item in the database using the ID.</td>
    </tr>
    <tr>
      <td>2.</td>
      <td>Delete the item.</td>
    </tr>
  </table>
<br><br>
  <h3>ROUTER SCHEMA</h3>
  <table>
    <tr>
      <td>1.</td>
      <td>Connection to MongoDB</td>
    </tr>
    <tr>
      <td></td>
      <td>- Mongo schema</td>
    </tr>
    <tr>
      <td></td>
      <td>- Mongoose</td>
    </tr>
    <tr>
      <td></td>
      <td>- moongose.connect</td>
    </tr>
  </table>

  <table>
    <tr>
      <td>2.</td>
      <td>Express App</td>
    </tr>
    <tr>
      <td></td>
      <td>- require('express')</td>
    </tr>
    <tr>
      <td></td>
      <td>- app.listen()</td>
    </tr>
  </table>

  <table>
    <tr>
      <td>3.</td>
      <td>Router</td>
    </tr>
    <tr>
      <td></td>
      <td>- express.Router()</td>
    </tr>
    <tr>
      <td></td>
      <td>- app.use('/prefix', router)</td>
    </tr>
  </table>

  <br><br>

  <h3>Project Folders (common)</h3>
  <lu>
  	<li>index.js</li>
  	<li>models/</li>
  	<li>routes/</li>
  	<li>middlewares/</li>
  </lu>