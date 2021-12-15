import React from "react";
import "./styles/Badges.css";
import ReactLogo from "../images/react-logo3.svg";
import { Link } from "react-router-dom";
import PageLoading from "../componets/pageLoading";
import PageError from "../componets/pageError";
import MiniLoader from "../componets/miniLoader";
import "bootstrap/dist/css/bootstrap.css";
import "../componets/styles/BadgesList.css";
import twitterLogo from "../images/twitter.svg";
import swal from "sweetalert";
class Badges extends React.Component {

  state = {
    loading: true,
    error: null,
    data: {
      results: [],
    },
    nextPage: 1,
  };

  componentDidMount() {
    this.intervalID = this.fetchData();
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null }); //
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results),
        },
        nextPage: this.state.nextPage + 1,
      });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <React.Fragment>
        <div className="Badges__hero sup-margin">
          <div className="Badges__container">
            <div className="Badges__list">
              <div className="Badges__container">
                <ul className="list-unstyled BadgesList">
                  {this.state.data.results.map((character) => {
                    return (
                      <Link
                        className="text-reset text-decoration-none"
                        to={`/badges/${character.id}`}
                      >
                        <li key={character.id} className="BadgesListItem">
                          <img
                            src={character.image}
                            alt={character.name}
                            className="BadgesListItem__avatar"
                          />
                          <div>
                            <b>{character.name}</b>
                            <div className="Twitter__name">
                              <span className="Twitter__logo">
                                <img
                                  className="Twitter__logo-img"
                                  src={twitterLogo}
                                  alt="logo de twitter"
                                />
                              </span>
                              @
                              {character.name.split(" ").join("").toLowerCase()}
                            </div>
                            {character.species}
                          </div>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
                {this.state.loading && (
                  <div className="miniloader">
                    <MiniLoader />
                  </div>
                )}
                {!this.state.loading && this.state.data.info.next && (
                  <div className="Badges__buttons">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.fetchData();
                      }}
                    >
                      Loading More
                    </button>
                  </div>
                )}
                <div className="Badges">
                  <div className="Badges__hero">
                    <div className="Badges__container">
                      <div className="Badges__buttons">
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            swal({
                              title: "Coming Soon",
                              text: "We hope to activate this soon",
                              icon: "info",
                            });
                          }}
                        >
                          New Badge
                        </button>
                      </div>
                      <div className="badge-logos-container">
                        <a href="https://es.reactjs.org/" target="_blank">
                          <img
                            className="Badges_conf-logo react-logo"
                            src={ReactLogo}
                            alt="Logo de React js"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
