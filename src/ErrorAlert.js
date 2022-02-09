import Alert from "./Alert";

class ErrorAlert extends Alert{
  constructor(props) {
    super(props);
    this.color = 'red';
  }
}
export default ErrorAlert;