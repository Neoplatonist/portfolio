import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from '#app/components/app';
import Homepage from '#app/components/homepage';
import Usage from '#app/components/usage';
import About from '#app/components/about';
import Projects from '#app/components/projects';
  import QuoteGenerator from '#app/components/projects/quote-generator';
    import QuoteGeneratorLive from '#app/components/projects/quote-generator/live';
  import WikiViewer from '#app/components/projects/wiki-viewer';
    import WikiViewerLive from '#app/components/projects/wiki-viewer/live';
import NotFound from '#app/components/not-found';

/**
 * Returns configured routes for different
 * environments. `w` - wrapper that helps skip
 * data fetching with onEnter hook at first time.
 * @param {Object} - any data for static loaders and first-time-loading marker
 * @returns {Object} - configured routes
 */
export default ({store, first}) => {

  // Make a closure to skip first request
  function w(loader) {
    return (nextState, replaceState, callback) => {
      if (first.time) {
        first.time = false;
        return callback();
      }
      return loader ? loader({store, nextState, replaceState, callback}) : callback();
    };
  }

  return (
    <Route path="/" component={App}>
      <IndexRoute component={Homepage} onEnter={w(Homepage.onEnter)}/>
      <Route path="/usage" component={Usage} onEnter={w(Usage.onEnter)}/>
      <Route path="/about" component={About} onEnter={w(About.onEnter)}/>
      <Route path="/projects" component={Projects} onEnter={w(Projects.onEnter)}/>
      <Route path="/projects/quote-generator" component={QuoteGenerator} onEnter={w(QuoteGenerator.onEnter)}/>
      <Route path="/projects/quote-generator/live" component={QuoteGeneratorLive} onEnter={w(QuoteGeneratorLive.onEnter)}/>
      <Route path="/projects/wiki-viewer" component={WikiViewer} onEnter={w(WikiViewer.onEnter)}/>
      <Route path="/projects/wiki-viewer/live" component={WikiViewerLive} onEnter={w(WikiViewerLive.onEnter)}/>

      {/* Server redirect in action */}
      <Redirect from="docs" to="usage" />
      <Route path="*" component={NotFound} onEnter={w(NotFound.onEnter)}/>
    </Route>
  );
};
