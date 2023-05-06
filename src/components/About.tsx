function opentab(tabName: string) {
  // Get all tab content elements and hide them
  const tabContents = document.querySelectorAll('.tab-contents') as NodeListOf<HTMLElement>;
  tabContents.forEach(tabContent => tabContent.classList.remove('active-tab'));

  // Get all tab links and remove the active class
  const tabLinks = document.querySelectorAll('.tab-links') as NodeListOf<HTMLElement>;
  tabLinks.forEach(tabLink => tabLink.classList.remove('active-link'));

  // Show the specific tab content
  const activeTab = document.getElementById(tabName) as HTMLElement;
  activeTab.classList.add('active-tab');

  // Add the active class to the button that opened the tab
  const activeLink = document.querySelector(`[data-tab="${tabName}"]`) as HTMLElement;
  activeLink.classList.add('active-link');
}


function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="./images/header2.png" alt="about me" />
          </div>
          <div className="about-col-2">
            <h1 className="subtitle">About Me</h1>
            <p>
              I'm a person who enjoys growth, knowledge, and cool tech and I've recently embarked on an exciting new chapter in my life. Web design has always interested me and I've finally taken my first steps towards pursuing those interests. This website will track my personal development as a web designer and showcase my projects.
            </p>
            <div className="tab-titles">
              <p className="tab-links active-link" onClick={() => opentab('skills')}>
                Skills
              </p>
              <p className="tab-links" onClick={() => opentab('experience')}>
                Experience
              </p>
              <p className="tab-links" onClick={() => opentab('education')}>
                Education
              </p>
            </div>
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li>
                  <span>1Lorem ipsum1</span>
                  <br />
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  <span>1Lorem ipsum1</span>
                  <br />
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  <span>1Lorem ipsum1</span>
                  <br />
                  Lorem ipsum dolor sit amet
                </li>
              </ul>
            </div>
            <div className="tab-contents" id="experience">
              <ul>
                <li>
                  <span>2Lorem ipsum2</span>
                  <br />
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  <span>2Lorem ipsum2</span>
                  <br />
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  <span>2Lorem ipsum2</span>
                  <br />
                  Lorem ipsum dolor sit amet
                </li>
              </ul>
            </div>
            <div className="tab-contents" id="education">
              <ul>
                <li>
                  <span>3Lorem ipsum3</span>
                  <br />
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  <span>3Lorem ipsum3</span>
                  <br />
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  <span>3Lorem ipsum3</span>
                  <br />
                  Lorem ipsum dolor sit amet
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
