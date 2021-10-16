import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0),
      marginTop: theme.spacing(1)
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: '18px',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    alignItems: 'center',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));