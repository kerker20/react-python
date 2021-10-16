import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  border: {
    border: 'solid',
  },
  paper: {
    marginTop: 20,
  },
  fullHeightCard: {
    height: '90%',
    width: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'black',
  },
  overlay3: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    color: '#827e7e',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  delete: {
    marginTop: '-22px',
    float: 'right'
  },
  avatar: {
    width: '130px',
    height: '130px',
    marginRight: '2px',
    top: '15px',
    marginLeft: '5px',
    position: 'relative',
  },
  vertical: {
    borderWidth: '1px',
    borderColor: 'black',
    borderStyle: 'solid',
    margin: '2px',
    opacity: '0.1',
    marginRight: '5px'
  },
  infoUser: {
    marginLeft: '5px'
  },
  twit: {
    color: '#51bbf5'
  },
  link: {
    color: '#217ab5'
  },
  book: {
    color: '#08354d'
  },
  git: {
    color: '#091b24'
  },
  update: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'black',
  },
  actions: {
    marginLeft: '30px',
  },
  nameOnEdit: {
    border: 0,
    outline: 0,
    fontSize: '15px',
    margin: 0,
    padding: 0,
    width: '80px',
    opacity: 0.9
  },
  nameOnEditContent: {
    border: 0,
    outline: 0,
    fontSize: '14px',
    margin: 0,
    width: '120px',
    padding: 0,
    opacity: 0.9
  },
  iconUpdate: {
    position: 'relative',
    right: '9.5rem',
    bottom: '66px'

  },
  fullName: {
    display: 'inline-block',
  },
  saved: {
    fontSize: '20px',
    color: 'black', 
    opacity: 0.5
  },
  ripple: {
    right: '5rem',
    fontSize: '5px',
    top: '9px',
    opacity: 0.5
  },
}));