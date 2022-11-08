import React, { useEffect } from "react";
//import { useParams } from "react-router-dom";

import Input from "../Components/Addphone/Input";
import "./PhoneForm.css";

import Button from "../Components/Addphone/Button";
import { VALIDATOR_REQUIRE } from "../Components/Addphone/validators";
import { useForm } from "../Components/hooks/forms";
import axios from "axios";

const DUMMY_PHONES = [
  {
    id: "p1",
    name: "Realme 3g",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    price: "20889",
    portfolio: "u1csjklsdkjfpojkmeoijomcdlkdm hgdskjhnk,masdkl",
    brand: "62",
  },
  {
    id: "p1",
    name: "Realme 3g",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    price: "20889",
    portfolio: "u1csjklsdkjfpojkmeoijomcdlkdm hgdskjhnk,masdkl",
    brand: "62",
  },
  {
    id: "p1",
    name: "Realme 3g",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    price: "20889",
    portfolio: "u1csjklsdkjfpojkmeoijomcdlkdm hgdskjhnk,masdkl",
    brand: "62",
  },
];

const EditPhone = (props) => {
  const phoneId = props.id;
  console.log("props",props.id)
  console.log("phone",phoneId)
  //  const phoneId = useParams().phoneId;
  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        id: "name",
        value: "",
        isValid: false,
      },
      image: {
        id: "image",
        value: "",
        isValid: false,
      },
      price: {
        id: "price",
        value: "",
        isValid: false,
      },
      portfolio: {
        id: "portfolio",
        value: "",
        isValid: false,
      },
      brand: {
        id: "brand",
        value: "",
        isValid: false,
      },
    },
    false
  );
  let identifiedPhone;
  const getPhoneData = async () => {
    //const result = await fetch('http://localhost:5000/api/phones/'+"635edd828bcb20d902fe4643");
    const result = await axios.get("http://localhost:5000/api/phones/")
    identifiedPhone = await result.json().phone;
    console.log(identifiedPhone)
    setFormData(
      {
        name: {
          value: identifiedPhone.name,
          isValid: true,
        },
        image: {
          value: identifiedPhone.image,
          isValid: true,
        },
        price: {
          value: identifiedPhone.price,
          isValid: true,
        },
        portfolio: {
          value: identifiedPhone.portfolio,
          isValid: true,
        },
        brand: {
          value: identifiedPhone.brand,
          isValid: true,
        },
      },
      true
    );
  };

  const postPhoneData =async()=>{
  console.log("form");
    const result = await fetch('http://localhost:5000/api/phones/'+"635edd828bcb20d902fe4643",{
      method:"PATCH",
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
    console.log("not done")
    const updatedphone = await result.JSON().phone
    console.log(updatedphone)


  }
  useEffect(() => {
    getPhoneData();
  }, [getPhoneData]);

  const phoneEditsubmitHandler = (event) => {
    event.preventDefault();
    //console.log(formState.inputs, "form");
    postPhoneData()
  console.log("done");

  };

  // if (!identifiedPhone) {
  //   return (
  //     <div className="center">
  //       <h2>Could not find phone!</h2>
  //     </div>
  //   );
  // }

  // if (!formState.inputs.name.value) {
  //   return (
  //     <div className="center">
  //       <h2>Could not find phone!</h2>
  //     </div>
  //   );
  // }
  return (
    <div className="container">
    <div className="row">
    <div className="col-md-12">
      <div className="card1">
    <div className="cardh" >
      <h2><div className="txt1">Edit Phone</div></h2>
    </div>
    <div>
    <div className="card-body">
    <form className="phone-add-form" onSubmit={phoneEditsubmitHandler}>
      <Input
        id="name"
        element="input"
        type="text"
        label="Phone Name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid input"
        onInput={inputHandler}
        value={formState.inputs.name.value}
        valid={formState.inputs.name.isValid}
      ></Input>
      <Input
        id="image"
        element="input"
        type="text"
        label="Image Url"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid input"
        onInput={inputHandler}
        value={formState.inputs.image.value}
        valid={formState.inputs.image.isValid}
      ></Input>
      <Input
        id="price"
        element="input"
        type="number"
        label="Price"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid input"
        onInput={inputHandler}
        value={formState.inputs.price.value}
        valid={formState.inputs.price.isValid}
      ></Input>
      <Input
        id="portfolio"
        element="input"
        type="number"
        label="PortFolio Name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid input"
        onInput={inputHandler}
        value={formState.inputs.portfolio.value}
        valid={formState.inputs.portfolio.isValid}
      ></Input>
      <Input
        id="brand"
        element="input"
        type="number"
        label="Brand"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid input"
        onInput={inputHandler}
        value={formState.inputs.brand.value}
        valid={formState.inputs.brand.isValid}
      ></Input>
      <Button type="Submit" disabled={!formState.isValid}>
        Edit Phone
      </Button>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    
  );
};

export default EditPhone;
