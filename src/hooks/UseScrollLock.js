import { useScrollLock } from '@mantine/hooks';

function UseScrollLock() {
  const [scrollLocked, setScrollLocked] = useScrollLock();

  setScrollLocked((c) => !c);
}

export default UseScrollLock;