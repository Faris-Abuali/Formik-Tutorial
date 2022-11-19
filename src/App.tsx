import EnrollmentForm from './components/Practical/components/EnrollmentForm';
import LoginForm from './components/Practical/components/LoginForm';
import RegistrationForm from './components/Practical/components/RegistrationForm';
import FormikContainer from './components/Practical/FormikContainer';
import YouTubeForm from './components/YouTubeForm'
import "./styles/App.css";
import { ChakraProvider } from '@chakra-ui/react';


const App = () => {
  return (
    <ChakraProvider>
      <div className='App'>
        {/* <YouTubeForm /> */}
        {/* <FormikContainer /> */}
        <LoginForm />
        {/* <RegistrationForm /> */}
        {/* <EnrollmentForm /> */}
      </div>
    </ChakraProvider>
  )
}

export default App