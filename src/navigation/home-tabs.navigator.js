import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeTabs } from "../screens/home";
// import { AppRoute } from "./app-routes";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Text } from "galio-framework";
import MainLayout from "../components/main-layout.component";

const { Navigator, Screen } = createBottomTabNavigator();

const TabOne = (props) => (
  <MainLayout navigation={props.navigation} drawer title="Tab1">
    <Text h1> Tab 1</Text>
  </MainLayout>
);
const TabTwo = (props) => (
  <MainLayout navigation={props.navigation} drawer title="Tab2">
    <Text h1> Tab2</Text>
  </MainLayout>
);

const HomeTabsNavigator = ({}) => (
  <Navigator tabBar={(props) => <HomeTabs {...props} />}>
    <Screen name={"tab1"} component={TabOne} />
    <Screen name={"tab2"} component={TabTwo} />
  </Navigator>
);

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(HomeTabsNavigator);
