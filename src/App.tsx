import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Button,
  useDisclosure,
  Spacer,
  CloseButton,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
type NotificationT = {
  title: string;
  message: string;
  onClose: () => void;
};

const Notification = ({ title, message, onClose }: NotificationT) => {
  return (
    <>
      <Alert status="info" rounded="3xl">
        <AlertIcon />
        <Box>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Box>
        <Spacer />
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={onClose}
        />
      </Alert>
    </>
  );
};

const App = () => {
  const [showNotification, setShowNotification] = useState(false);

  setInterval(() => {
    if (new Date().getMinutes() === 18) {
      setShowNotification(true);
    }
  }, 1000);

  return (
    <>
      <Container h="full" py={8}>
        <h1>Simple Alarm</h1>

        <Button onClick={() => setShowNotification((state) => !state)}>
          Show
        </Button>

        {showNotification && (
          <Notification
            title="Alarm"
            message="Bangun Bang"
            onClose={() => undefined}
          />
        )}
      </Container>
    </>
  );
};

export default App;
