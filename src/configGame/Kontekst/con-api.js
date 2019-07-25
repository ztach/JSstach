import React from 'react';
import {Link } from "react-router-dom";

import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
import { directive } from '@babel/types';

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

function NavigationBar (props){
    return(
        <div>NavigationBar</div>
    )
}

function Avatar () {
    return(
        <div>Awatar</div>
    )
}

function PageLayout (props){
    return (
        <div>PageLayout</div>
    )
}

function Feed (props){
    return (
        <div>Feed</div>
    )
}

function Page(props) {
    const user = props.user;
    const content = <Feed user={user} />;
    const topBar = (
      <NavigationBar>
        <Link href={user.permalink}>
          <Avatar user={user} size={props.avatarSize} />
        </Link>
      </NavigationBar>
    );
    return (
      <PageLayout
        topBar={topBar}
        content={content}
      />
    );
  }


class ConApp extends React.Component {
    state = {
      theme: themes.light,
      isThemeActive:false
    }

    toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  

  themeActive=() => {
    this.setState({isThemeActive:!this.state.isThemeActive});
 }

  

  render() {
    return (
        <>
    {this.isThemeActive
        ?
      <Page>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div>
          <ThemedButton />
        </div>
      </Page>
      :
      <button className="activate-btn" 
      onClick={this.themeActive}>
          activate theme
      </button>
    }
    </>

    );
  }
}

export default ConApp;
