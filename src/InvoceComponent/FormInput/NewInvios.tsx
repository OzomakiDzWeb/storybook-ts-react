import Button from '../Buttons/Button'
import ButtonAddItmes from '../Buttons/ButtonAddItmes/ButtonAddItmes'
import './NewInvios.css'
type NewInviosProp={
     theme:"Lghit"|"dark",

}
const NewInvios = ({theme}:NewInviosProp) => {
  return (
    <div className={['newInvios',theme].join(' ')}>
     <h2>New Invoice</h2>
     <h4>Bill Form</h4>
     <label htmlFor="streetadress"><p>Street Address</p></label>
     <input type="text" id="streetadress"/>
     <div className="stritAdress">
           <div className="city">
                  <label htmlFor="City"><p>City</p></label>
                  <input type="text" id="city"/>   
           </div>
          <div className="post">
                   <label htmlFor="postCode"><p> Post Code</p></label>
                   <input type="text" id="postCode"/>   
          </div>
          <div className="Country">
                <label htmlFor="Country"><p>Country</p></label>
                <input type="text" id="Country"/>  
          </div>
           
     </div>
     <h4>Bill To</h4>
     <label htmlFor="ClientName"><p>Client’s Name</p></label>
     <input type="text" id="ClientName"/>
     <div className="stritAdress">
           <div className="city">
                  <label htmlFor="City"><p>City</p></label>
                  <input type="text" id="city"/>   
           </div>
          <div className="post">
                   <label htmlFor="postCode"><p> Post Code</p></label>
                   <input type="text" id="postCode"/>   
          </div>
          <div className="Country">
                <label htmlFor="Country"><p>Country</p></label>
                <input type="text" id="Country"/>  
          </div>
           
     </div>
     <div className="datpaytment">
               <div className="post">
                     <label htmlFor="birthday"><p>Invoice date</p></label>
                     <input type="date" id="birthday" name="birthday"/>   
                 </div>
                 <div className="post">
                   <label htmlFor="cars"><p>Payment Termes</p></label>
                    <select id="cars">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>  
                 </div>
     </div>
     <label htmlFor="description"><p>description</p></label>
     <input type="text" id="description"/> 
      <h4>Itme Name</h4>
      <div className="itmeAdd">
         <div className="NamItm">
             <label htmlFor="itmName"><p>Itme Name</p></label>
             <input type="text" id="itmName"/> 
         </div>
         <div className="infoItm">
                <div className="Qty">
                     <label htmlFor="Qty"><p>Qty</p></label>
                     <input type="text" id="Qty" />   
                 </div>
                 <div className="Price">
                     <label htmlFor="Price"><p>Price</p></label>
                     <input type="text" id="Price" />   
                 </div>
                 <div className="total">
                    <label htmlFor=""><p>Total</p></label>
                    <div className="totalcontent">
                         <h4>15,00</h4>
                         <img src='/src/assets/icon-delete.svg' alt='delt'/>
                    </div>
                 </div>
         </div>
     </div>  
     <div style={{marginTop:'20px'}}><ButtonAddItmes  theme={theme==='dark'?'dark':'lghit'}/></div>
     <div className="butons">
       <Button color='edit' size='small' children='Discard'/>
       <div>
          <Button color='draftLghit' size='larg' children='Save as Draft'/>
          <Button color='MarkAsPaid' size='larg' children='Save & Send'/>
       </div>
     </div>   
    

    </div>
  )
}

export default NewInvios