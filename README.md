`overrideNative` in video js fail on Android device with native HLS support. This repo is to verify and examine the problem.

## Set up

```
npm install
npm run build
```

## Conclusion

- Not related to webpack
	- Pass examples:
		- no-webpack.html
		- webpack-before-video.html
	- Fail examples:
		- no-webpack-after-video.html
		- webpack-after-video.html


- Related to load order
	- Video js must load before the video tag

## Note

- This problem cannot be simulated by browser simulator
