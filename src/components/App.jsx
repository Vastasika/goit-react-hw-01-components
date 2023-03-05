import { Profile } from "./Profile/Profile";
import user from "./Profile/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "./Statistics/data.json";

import transactions from "./TransactionHistory/transactions.json"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
