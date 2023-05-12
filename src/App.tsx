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
  Text,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
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
  const [jam, setJam] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <Container h="full" py={8}>
        <Text fontSize="3xl" fontWeight="bold">
          Alarm Madura
        </Text>

        <FormControl isRequired>
          <VStack maxW="64" align="start">
            <HStack justify="between" w="full">
              <FormLabel>Jam</FormLabel>
              <Input onChange={(e) => setJam(e.target.value)} type="time" />
            </HStack>
            <HStack justify="between" w="full">
              <FormLabel>Message</FormLabel>
              <Input onChange={(e) => setMessage(e.target.value)} />
            </HStack>
            <Button onClick={() => console.log(jam)}>Set</Button>
          </VStack>
        </FormControl>
        {showNotification && (
          <Notification
            title="Alarm"
            message="Bangun Bang"
            onClose={() => setShowNotification(!showNotification)}
          />
        )}
      </Container>
    </>
  );
};

export default App;
