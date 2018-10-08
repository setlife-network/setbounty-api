# SetBounty Chrome Extension

## Getting Started

```
git clone https://github.com/setlife-network/setbounty.git
cd setbounty/chrome
yarn install
```

## Usage

Begin by running:

    $ yarn run build

Webpack will create a bundle for background and content scripts inside the '/assets' directory (no popup script is used).  
You will want to keep your terminal window open to keep the listener running for changes to any files. The `watch: true` option in the webpack configuration automatically updates the bundled assets if it detects any changes to the files in the content and background directories.  

- Go to `chrome://extensions` in your browser window and click **Load unpacked**.
- Select the `/assets` directory and the extension should appear in the top right alongside any other extensions.
- While webpack technically "hot-reloads" the source files, you will still need to click the Refresh icon for the extension on the `chrome://extensions` page and then reload the page you will be testing the extension on.

## Directory Layout

```
|-- /assets/                                # Contains all webpack bundles and static assets. Used for development AND production.
|-- /background/                            # Holds all files associated with the background script of a Chrome extension
    |-- /reducers/                          # Reducers for Redux state management
|-- /content/                               # Holds all files associated with the content script of a Chrome extension
    |-- /components/                        # Any components used by the content script
```