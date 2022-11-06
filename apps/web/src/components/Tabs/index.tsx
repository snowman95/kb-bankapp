import { LayoutGroup } from "framer-motion";
import { CurrentTab, Tab, TabBox } from "./styles";

interface TabsProps {
  id: string;
  size: number;
  current: number;
}
export const Tabs = ({ id, size, current }: TabsProps) => {
  const array = Array.from({ length: size }, () => 0);
  return (
    <LayoutGroup id={id}>
      <TabBox>
        {array.map((i, index) => {
          return index === current ? (
            <CurrentTab
              key={`${id}_${index}`}
              transition={{
                layout: { duration: 0.5 },
              }}
            />
          ) : (
            <Tab
              key={`${id}_${index}`}
              transition={{
                layout: { duration: 0.5 },
              }}
            />
          );
        })}
      </TabBox>
    </LayoutGroup>
  );
};
