import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  StatusBar,
  Text,
  View,
  Platform,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

function BankWebview() {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
        }}
        edges={["top", "left", "right"]}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.container}
        >
          <WebView
            source={{ uri: "https://kb-bankapp.vercel.app" }}
            javaScriptEnabled={true}
            cacheEnabled={false}
            cacheMode={"LOAD_NO_CACHE"}
            // onMessage={onMessage}
            bounces={false}
            // overScrollMode={'never'}
            scrollEnabled={false}
            // 키보드 상단의 화살표 및 done 버튼 숨기기
            hideKeyboardAccessoryView={true}
            // 스크롤
            showsVerticalScrollIndicator={false}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BankWebview;
