import React, {useState} from "react";
import { FormControl, FormGroup, TextField, Button } from "@material-ui/core";
import "./FormSendTweet.scss";

const FromSendTweet = (props) => {
  const {sendTweet} = props;
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: ""
  })

  const onFormChange = e => {
    setFormValue({
      ...formValue,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div className="form-send-tweet">
      <h2 className="form-send-tweet__title">Enviar Tweet</h2>
      <form className="form-send-tweet__form" onSubmit={(e) => sendTweet(e, formValue)}>
        <FormControl>
          <FormGroup>
            <TextField 
            className="form-send-tweet__form-name"
            type="text"
            name="name"
            placeholder="Nombre del Usuario"
            margin="normal"
            onChange={onFormChange}
            />
          </FormGroup>
          <FormGroup>
            <TextField
            className="form-sendTweet__form-textarea"
            name="tweet"
            multiline
            rows="6"
            placeholder="Escribe tu Tweet..."
            margin="normal"
            onChange={onFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Button
            type="submit"
            color="inherit"
            variant="contained"
            >Enviar Tweet</Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
};

export default FromSendTweet;
