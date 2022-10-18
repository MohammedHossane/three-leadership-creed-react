import { Fragment } from 'react';
import './App.css';

function Buttons() {
  function playAnimation() {
    //selects the "img" and changes the properties to a 3 second animation that goes on infinently. 
    document.querySelector("img").style.setProperty("animation", ".2s ease 0s infinite normal none running img")
  }

  function stopAnimation() {
    document.querySelector("img").style.setProperty("animation", ".2s ease 0s 0 normal none running img")
  }
  return (
    <Fragment>
      <button onClick={playAnimation} id="animationbutton" class="box" > Start Animation </button>

      <button onClick={stopAnimation} id="animationbuttons" class="box" > End Animation </button>
    </Fragment>
  )
}

export { Buttons }
function Creed() {
  return (
    <div classname="App">
      <div className="bigoutsidediv">
        <header className="theposition">
          <h1>
            <b className="animate-charcter">SEALS</b>
          </h1>
        </header>
        <div className="box">
          <div className="texta">
            <h3>
              <b className="animate-charcters"> SEALS Challenge 1</b>
            </h3>
            <h5>
              {" "}
              What Are The Top 3 Leadership Creeds you Have Applied After SCLA?{" "}
            </h5>
          </div>
          <div className="texta">
            <ul>
              <li>
                <b className="animate-charctersa">
                  I will not lie, cheat, or steal.
                </b>
              </li>
              <p>
                {" "}
                In my APUSH class, many around me decide to cheat through exams and
                quizzes, I have had many opportunities to do the same, although I
                choose not to. If I cheat myself now, I will also cheat myself
                during the AP exam, where there is no chance of cheating.
              </p>
              <li>
                <b className="animate-charctersa"> I will think outside the box.</b>
              </li>
              <p>
                {" "}
                After SCLA, I have always tried to think outside of the box. An
                example of me thinking outside of the box is in my physics class. We
                were assigned to create a popsicle stick bazooka and consistently
                hit an object four times in a row. Many other groups chose to create
                complicated and sophisticated designs and failed to meet the goal.
                Instead I made a straightforward design that was, in reality, a
                slingshot. I hit the object four times and left with an A.
              </p>
              <li>
                <b className="animate-charctersa">
                  I believe nothing is hard just a lot of work.
                </b>
              </li>
              <p id="third-p-tag">
                {" "}
                The idealogy of believing nothing is hard, just a lot of work, has
                stuck with me after SCLA. I have applied this thinking into all most
                everything I do, whether it's school, games, or general. For
                example, APUSH is not hard; it is just a lot of reading. Or a game
                like VALORANT, VALORANT is not difficult; it just requires a lot of
                playing to develop your skills.
              </p>
            </ul>
          </div>
        </div>
        <img
          className="wickedinsane"
          src="https://cdn.betterttv.net/emote/6076964939b5010444cfee3c/3x"
          alt="bruh no moving from"
        />
      </div>
    </div>

  );
}

export default Creed;
