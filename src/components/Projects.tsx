function Projects() {
    return (
        <div id="portfolio">
          <div className="container">
            <h1 className="subtitle">My Work</h1>
            <div className="work-list">
              <div className="work">
                <img src="./images/work1.jpg" alt="work 1" />
                <div className="layer">
                  <h3>CSS Snippet</h3>
                  <p>A "Cheat Sheet" to store snippets of useful code.</p>
                  <a href="https://scostemal.github.io/css-snippet-cheatsheet-project/"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>
              <div className="work">
                <img src="./images/work2.jpg" alt="work 2" />
                <div className="layer">
                  <h3>Weather Forecast Application</h3>
                  <p>A weather application powered by Javascript that provides the current weather and a 5-day forecast for the searched city.</p>
                  <a href="https://scostemal.github.io/weather-forecast/"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>
              <div className="work">
                <img src="./images/animal-facts2.png" alt="work 3" />
                <div className="layer">
                  <h3>Animal Browser</h3>
                  <p>A Javascript based application that allows users to find photos and random facts about dogs.</p>
                  <a href="https://jcxxz.github.io/team-project/"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>
            </div>
            <a href="#" className="btn">See More</a>
          </div>
        </div>
      );
    }

export default Projects;