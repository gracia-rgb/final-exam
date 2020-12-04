import React from 'react';
import Container from 'react-bootstrap/Container';

const About = () => {
  return(
    <Container className="mt-4">
      <p className="ket">Memberikan berbagai saran film yang dilengkapi dengan Cover Film, Judul Film,
        Rating Film, dan juga Overview dari Film</p>
        <p className="nama">Dibuat oleh Gracia Meyva Waren Palangan</p>
        <p className="use">Menggunakan Rest API The Movie DB</p>
    </Container>
  );
}

export default About;