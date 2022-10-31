import React from "react";
import Input from "../Components/Addphone/Input";
import "./PhoneForm.css";
import Button from "../Components/Addphone/Button";
import { VALIDATOR_REQUIRE } from "../Components/Addphone/validators";
import { useForm } from "../Components/hooks/forms";

const NewPhone = () => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        id: 'name',
        value: "",
        isValid: false,
      },
      image: {
        id: 'image',
        value: "",
        isValid: false,
      },
      price: {
        id: 'price',
        value: "",
        isValid: false,
      },
      portfolio: {
        id: 'portfolio',
        value: "",
        isValid: false,
      },
      brand: {
        id: 'brand',
        value: "",
        isValid: false,
      },
    },
    false
  );
  const postPhoneData =async()=>{
    console.log("form");
      const result = await fetch('http://localhost:5000/api/phones',{
        method:"POST",
        headers:{
  
                  'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          name: formState.inputs.name.value,
          image:formState.inputs.image.value,
          price:formState.inputs.price.value,
          portfolio:formState.inputs.portfolio.value,
          brand:formState.inputs.brand.id
        })
  
      })
      //console.log("not done")
      const updatedphone = await result.JSON().phone
      console.log(updatedphone)
  
  
    }

  const phoneSubmitHandler = (event) => {
    event.preventDefault();
    postPhoneData()
    //console.log(formState.inputs,'form'); // send to the backend
  };

  return (
    <form className="phone-add-form" on onSubmit={phoneSubmitHandler}>
      <Input
        id="name"
        element="input"
        type="text"
        label="Phone Name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid input"
        onInput={inputHandler}
      ></Input>
      <Input
        id="image"
        element="input"
        type="text"
        label="Image Url"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid input"
        onInput={inputHandler}
      ></Input>
      <Input
        id="price"
        element="input"
        type="number"
        label="Price"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid input"
        onInput={inputHandler}
      ></Input>
      <Input
        id="portfolio"
        element="input"
        type="number"
        label="PortFolio Name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid input"
        onInput={inputHandler}
      ></Input>
      <Input
        id="brand"
        element="input"
        type="number"
        label="Brand"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid input"
        onInput={inputHandler}
      ></Input>
      <Button type="Submit" disabled={!formState.isValid}>Add Phone</Button>
    </form>
  );
};
export default NewPhone;
