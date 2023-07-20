import { useEffect, useState } from "react";

const useTime = (targetTime) => {
  const [diff, setDiff] = useState(Date.now() - new Date(targetTime));
  console.log("initial: " + diff);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDiff((_diff) => _diff + 1000);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      console.log("timeout cleared");
    };
  }, [diff]);

  useEffect(() => {
    setDiff(Date.now() - new Date(targetTime));
    console.log("useEffect: " + diff);
  }, [targetTime]);

  return getCal(diff);
};

const getCal = (diff) => {
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export default useTime;
