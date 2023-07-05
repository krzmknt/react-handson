import { faker } from "@faker-js/faker";

const bigList = [...Array(5000)].map(() => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
}));

const List = ({ data = [], renderItem, renderEmpty }: any) => {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item: any, i: number) => (
        <li key={i}> {renderItem(item)}</li>
      ))}
    </ul>
  );
};

export const UserList = () => {
  const renderItem = (item: any) => (
    <div style={{ display: "flex" }}>
      <img src={item.avatar} alt={item.name} width={50} />
      <p>
        {item.name} - {item.email}
      </p>
    </div>
  );

  return <List data={bigList} renderItem={renderItem} />;
};
