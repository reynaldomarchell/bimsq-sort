import peoples from "../../../data/peoples";
import SectionTitle from "./SectionTitle";
import PeopleItem from "./PeopleItem";

function Peoples() {
  return (
    <div className="py-12">
      <SectionTitle>Our People</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {peoples.map((people) => (
          <PeopleItem
            key={people.name}
            name={people.name}
            imgUrl={people.imgUrl}
            role={people.role}
            instagram={people.instagram}
            quotes={people.quotes}
          />
        ))}
      </div>
    </div>
  );
}

export default Peoples;
