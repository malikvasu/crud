import React from 'react'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
const About = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid bg-light">
        <div className="container">
          {/* Justice League Start */}
          <div className="row movie1">
            <div className="col-12 col-lg-6 text-center">
              <img
                src={require("../../assets/images/dc1.jpg")}
                className="img-fluid w-75 p-5 poster"
                alt=""
              />
            </div>
            <div className="col">
              <p className="p-3 p-lg-5 movie-des">
                Justice League is a 2017 American superhero film based on the DC
                Comics superhero team of the same name. Co-produced by DC Films,
                Atlas Entertainment, and Cruel and
                Unusual Films and distributed by Warner Bros. Pictures, it is
                the fifth installment in the DC Extended Universe (DCEU) and the
                follow-up to Batman v Superman: Dawn of Justice. Directed by
                Zack Snyder and written by Chris Terrio and Joss Whedon, the
                film features an ensemble cast including Ben Affleck, Henry
                Cavill, Amy Adams, Gal Gadot, Ezra Miller, Jason Momoa, Ray
                Fisher, Jeremy Irons, Diane Lane, Connie Nielsen, J. K. Simmons,
                and Ciarán Hinds. In the film, Batman and Wonder Woman recruit
                The Flash, Aquaman, and Cyborg after the death of Superman to
                save the world from the catastrophic threat of Steppenwolf and
                his army of Parademons.
              </p>
            </div>
          </div>
          {/* Justice League End */}

          {/* Aquaman Start */}
          <div className="row movie2">
            <div className="col order-2 order-lg-1">
              <p className="p-3 p-lg-5 movie-des">
                Aquaman is a 2018 American superhero film based on the DC Comics
                character of the same name. Co-produced by DC Entertainment and
                Peter Safran Productions, and distributed by Warner Bros.
                Pictures, it is the sixth film in the DC Extended Universe
                (DCEU). The film was directed by James Wan, from a screenplay by
                David Leslie Johnson-McGoldrick and Will Beall. It stars Jason
                Momoa as Arthur Curry / Aquaman, who sets out to lead the
                underwater kingdom of Atlantis and stop his half-brother, King
                Orm, from uniting the seven underwater kingdoms to destroy the
                surface world. Amber Heard, Willem Dafoe, Patrick Wilson, Dolph
                Lundgren, Ludi Lin, Yahya Abdul-Mateen II, Temuera Morrison, and
                Nicole Kidman appear in supporting roles.
              </p>
            </div>
            <div className="col-12 col-lg-6 text-center order-1 order-lg-2">
              <img
                src={require("../../assets/images/dc2.jpg")}
                className="img-fluid w-75 p-5 poster"
                alt=""
              />
            </div>
          </div>
          {/* Aquaman End */}

          {/* Batman Start */}
          <div className="row movie3">
            <div className="col-12 col-lg-6 text-center">
              <img
                src={require("../../assets/images/dc3.jpg")}
                className="img-fluid w-75 p-5 poster"
                alt=""
              />
            </div>
            <div className="col">
              <p className="p-3 p-lg-5 movie-des">
                Batman is a superhero appearing in American comic books
                published by DC Comics. The character was created by artist Bob
                Kane and writer Bill Finger, and debuted in the 27th issue of
                the comic book Detective Comics on March 30, 1939. In the DC
                Universe continuity, Batman is the alias of Bruce Wayne, a
                wealthy American playboy, philanthropist, and industrialist who
                resides in Gotham City. Batman's origin story features him
                swearing vengeance against criminals after witnessing the murder
                of his parents Thomas and Martha, a vendetta tempered with the
                ideal of justice. He trains himself physically and
                intellectually, crafts a bat-inspired persona, and monitors the
                Gotham streets at night. Kane, Finger, and other creators
                accompanied Batman with supporting characters, including his
                sidekicks Robin and Batgirl; allies Alfred Pennyworth, James
                Gordon, and Catwoman; and foes such as the Penguin, the Riddler,
                Two-Face, and his archenemy the Joker.
              </p>
            </div>
          </div>
          {/* Batman End */}
          {/* Wonder Woman Start */}
          <div className="row movie4">
            <div className="col order-2 order-lg-1">
              <p className="p-3 p-lg-5 movie-des">
                Wonder Woman is a superheroine appearing in American comic books
                published by DC Comics. The character is a founding member of
                the Justice League. The character first appeared in All Star
                Comics #8 published October 21, 1941 with her first feature in
                Sensation Comics #1 in January 1942. The Wonder Woman title has
                been published by DC Comics almost continuously ever since. In
                her homeland, the island nation of Themyscira, her official
                title is Princess Diana of Themyscira. When blending into the
                society outside of her homeland, she sometimes adopts her
                civilian identity Diana Prince. Wonder Woman was created by the
                American psychologist and writer William Moulton Marston (pen
                name: Charles Moulton), and artist Harry G. Peter. Marston's
                wife, Elizabeth, and their life partner, Olive Byrne, are
                credited as being his inspiration for the character's
                appearance.
              </p>
            </div>
            <div className="col-12 col-lg-6 text-center order-1 order-lg-2">
              <img
                src={require("../../assets/images/dc5.jpg")}
                className="img-fluid w-75 p-5 poster"
                alt=""
              />
            </div>
          </div>
          {/* Wonder Woman End */}

          {/* Joker Start */}
          <div className="row movie5">
            <div className="col-12 col-lg-6 text-center">
              <img
                src={require("../../assets/images/dc6.jpg")}
                className="img-fluid w-75 p-5 poster"
                alt=""
              />
            </div>
            <div className="col">
              <p className="p-3 p-lg-5 movie-des">
                Joker is a 2019 American psychological thriller film directed
                and produced by Todd Phillips, who co-wrote the screenplay with
                Scott Silver. The film, based on DC Comics characters, stars
                Joaquin Phoenix as the Joker and provides a possible origin
                story for the character. Set in 1981, it follows Arthur Fleck, a
                failed clown and stand-up comedian whose descent into insanity
                and nihilism inspires a violent counter-cultural revolution
                against the wealthy in a decaying Gotham City. Robert De Niro,
                Zazie Beetz, Frances Conroy, Brett Cullen, Glenn Fleshler, Bill
                Camp, Shea Whigham, and Marc Maron appear in supporting roles.
                Distributed by Warner Bros. Pictures, Joker was produced by
                Warner Bros. Pictures and DC Films in association with Village
                Roadshow Pictures, Bron Creative and Joint Effort.
              </p>
            </div>
          </div>
          {/* Joker End */}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About