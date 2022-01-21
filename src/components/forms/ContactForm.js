import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const ContactForm = ({ form }) => {
  const textFields = form.map((input) => {
    return (
      <Grid item key={`${input.id}-input`}>
        <TextField
          className={input.className}
          error={input.error}
          fullWidth
          id={input.id}
          InputProps={input.inputProps}
          helperText={input.error ? `Please enter ${input.helper}` : ''}
          label={input.label}
          multiline={input.multiline}
          onBlur={(event) => input.onBlur(event)}
          onChange={(event) => input.onChange(event)}
          onFocus={(event) => input.onFocus(event)}
          placeholder={input.placeholder}
          rows={input.rows}
          value={input.value}
        ></TextField>
      </Grid>
    );
  });
  return <>{textFields}</>;
};

export default ContactForm;
