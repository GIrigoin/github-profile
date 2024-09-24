const ResultProfile = ({ image, name, bio }) => {
  return (
    <button>
      <img src={image} alt={name} />
      <section>
        <p>{name}</p>
        <p>{bio}</p>
      </section>
    </button>
  );
};

export default ResultProfile;
