# React App: draw charts with ant-chart library

In this project, we aim to display a graph by clicking on various sections of a shape, using the Ant-Chart library. Graph data is retrieved from a local server. The graph data in the data folder and data.json

## Environment setup

This code has been tested on windows 10, react 18.2.0 and ant-chart 2.0.3

- Clone the repository

```
git clone https://github.com/fahimegh/chart-app.git && cd chart-app
```

- Setup node environment

```
npm install
npm start
```

- To load data from local server: open new terminal and insert following command

```
npx json-server --watch data/data.json --port 4000
```

**Note: If you don't run the above command, the data related to the graphs will not be loaded, and you won't be able to view the graphs.**

After running the above command successfully, outputs similar to the image in the following folder in the directory of project

chart-ap/src/assets/images/1.PNG

## Outputs screenshots

After successfull run and clicking on the shapes you must see the outputs like images in the following directory

chart-ap/src/assets/images/2.PNG
chart-ap/src/assets/images/3.PNG
chart-ap/src/assets/images/4.PNG
