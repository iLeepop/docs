# Modify
Android 源码编辑
- 自启动
- 白名单
- 应用内置
- 隐藏导航栏
## 0116
### 修改内容
1. 添加启动代码到`frameworks/base/services/java/com/android/server/SystemServer.java`的`startOtherServices()`方法中
```java
// 系统服务启动完成后，添加以下代码
// ilee modify here --start
String kioskPackage = "dji.go.v5"; // 第三方应用包名
PackageManager pm = context.getPackageManager();
Intent intent = pm.getLaunchIntentForPackage(kioskPackage);
if (intent != null) {
    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    context.startActivity(intent);

    // add app to kiosk mod
    ActivityManager am = (ActivityManager) context.getSystemService(Context.ACTIVITY_SERVICE);
    boolean isInLockTask = am.getLockTaskModeState() != ActivityManager.LOCK_TASK_MODE_NONE;
    if (!isInLockTask) {
        startLockTask();
    }
}
// ilee modify here --end
```
2. 将应用添加到白名单`frameworks/base/core/res/res/values/config.xml`中添加
```xml
<string-array name="lock_task_packages">
    <item>com.example.thirdpartyapp</item>
</string-array>
```
3. 在`device\rockchip\rk356x\rk3566_tspi\rk3566_tspi.mk`中添加属性`persist.sys.def_launherpag`
**rk3566_tspi.mk**
```mk
PRODUCT_PROPERTY_OVERRIDES += persist.sys.def_launherpag=dji.go.v5

```
4. 添加应用到`device\rockchip\rk356x\rk3566_tspi\preinstall\`
,我就直接把应用`DJIFly.apk`丢进`preinstall`中
```
DJIFly
 |-- DJIFly.apk
 |-- Android.mk
 |-- lib
Android.mk
preinstall.mk
```
**Android.mk**
```Android.mk
include $(call all-subdir-makefiles)


```
**preinstall.mk**
```preinstall.mk
PRODUCT_PACKAGES += DJIFly

```
5. 修改底部导航栏功能并隐藏
```java
```

### 编译结果
编译失败
```
warning: some JAR files in the classpath have the Kotlin Runtime library bundled into them. This may cause difficult to debug problems if there's a different version of the Kotlin Runtime library in the classpath. Consider removing these libraries from the classpath
out/soong/.intermediates/frameworks/base/packages/SettingsLib/SettingsLib/android_common/turbine-combined/SettingsLib.jar: warning: library has Kotlin runtime bundled into it
out/soong/.intermediates/prebuilts/tools/common/m2/kotlinx-coroutines-core/android_common/turbine-combined/kotlinx-coroutines-core.jar: warning: library has Kotlin runtime bundled into it
frameworks/base/packages/SystemUI/src/com/android/systemui/controls/management/ControlsEditingActivity.kt:142:13: warning: variable 'rootView' is never used
        val rootView = requireViewById<ViewGroup>(R.id.controls_management_root)
            ^
frameworks/base/packages/SystemUI/src/com/android/systemui/controls/management/ControlsModel.kt:117:28: warning: parameter '_a' is never used
private fun nullIconGetter(_a: ComponentName, _b: String): Icon? = null
                           ^
frameworks/base/packages/SystemUI/src/com/android/systemui/controls/management/ControlsModel.kt:117:47: warning: parameter '_b' is never used
private fun nullIconGetter(_a: ComponentName, _b: String): Icon? = null
                                              ^
frameworks/base/packages/SystemUI/src/com/android/systemui/controls/management/FavoritesModel.kt:223:35: warning: 'getter for adapterPosition: Int' is deprecated. Deprecated in Java
            onMoveItem(viewHolder.adapterPosition, target.adapterPosition)
                                  ^
frameworks/base/packages/SystemUI/src/com/android/systemui/controls/management/FavoritesModel.kt:223:59: warning: 'getter for adapterPosition: Int' is deprecated. Deprecated in Java
            onMoveItem(viewHolder.adapterPosition, target.adapterPosition)
                                                          ^
frameworks/base/packages/SystemUI/src/com/android/systemui/controls/management/FavoritesModel.kt:231:28: warning: 'getter for adapterPosition: Int' is deprecated. Deprecated in Java
            if (viewHolder.adapterPosition < dividerPosition) {
                           ^
frameworks/base/packages/SystemUI/src/com/android/systemui/controls/management/FavoritesModel.kt:243:27: warning: 'getter for adapterPosition: Int' is deprecated. Deprecated in Java
            return target.adapterPosition < dividerPosition
                          ^
frameworks/base/packages/SystemUI/src/com/android/systemui/controls/ui/ControlViewHolder.kt:243:72: warning: unnecessary non-null assertion (!!) on a non-null receiver of type Behavior
        val behavior = if (existingBehavior == null || existingBehavior!!::class != clazz) {
                                                                       ^
frameworks/base/packages/SystemUI/src/com/android/systemui/controls/ui/ControlsUiControllerImpl.kt:200:33: warning: parameter 'items' is never used
    private fun showSeedingView(items: List<SelectionItem>) {
                                ^
frameworks/base/packages/SystemUI/src/com/android/systemui/media/MediaDataFilter.kt:96:37: warning: parameter 'id' is never used
    internal fun handleUserSwitched(id: Int) {
                                    ^
frameworks/base/packages/SystemUI/src/com/android/systemui/media/MediaDataManager.kt:496:62: warning: elvis operator (?:) always returns the left operand of non-nullable type Int
            MediaController.PlaybackInfo.PLAYBACK_TYPE_LOCAL ?: true
                                                             ^
frameworks/base/packages/SystemUI/src/com/android/systemui/media/MediaDataManager.kt:497:89: warning: right operand of elvis operator (?:) is useless if it is null
        val isPlaying = mediaController.playbackState?.let { isPlayingState(it.state) } ?: null
                                                                                        ^
frameworks/base/packages/SystemUI/src/com/android/systemui/media/MediaDataManager.kt:549:26: warning: parameter 'info' is never used, could be renamed to _
                decoder, info, source -> decoder.isMutableRequired = true
                         ^
frameworks/base/packages/SystemUI/src/com/android/systemui/media/MediaDataManager.kt:549:32: warning: name shadowed: source
                decoder, info, source -> decoder.isMutableRequired = true
                               ^
frameworks/base/packages/SystemUI/src/com/android/systemui/media/MediaDataManager.kt:549:32: warning: parameter 'source' is never used, could be renamed to _
                decoder, info, source -> decoder.isMutableRequired = true
                               ^
frameworks/base/packages/SystemUI/src/com/android/systemui/media/MediaDataManager.kt:614:30: warning: unnecessary safe call on a non-null receiver of type MediaData?
            val pkg = removed?.packageName
                             ^
frameworks/base/packages/SystemUI/src/com/android/systemui/media/MediaDeviceManager.kt:72:35: warning: unnecessary safe call on a non-null receiver of type MediaDeviceManager.Entry?
        if (entry == null || entry?.token != data.token) {
                                  ^
frameworks/base/packages/SystemUI/src/com/android/systemui/media/MediaDeviceManager.kt:160:18: warning: parameter 'fd' is never used
        fun dump(fd: FileDescriptor, pw: PrintWriter, args: Array<String>) {
                 ^
frameworks/base/packages/SystemUI/src/com/android/systemui/media/MediaDeviceManager.kt:160:55: warning: parameter 'args' is never used
        fun dump(fd: FileDescriptor, pw: PrintWriter, args: Array<String>) {
                                                      ^
frameworks/base/packages/SystemUI/src/com/android/systemui/media/MediaResumeListener.kt:170:57: warning: unnecessary non-null assertion (!!) on a non-null receiver of type List<ResolveInfo!>
                        tryUpdateResumptionList(key, inf!!.get(0).componentInfo.componentName)
                                                        ^
frameworks/base/packages/SystemUI/src/com/android/systemui/media/MediaSessionBasedFilter.kt:94:66: warning: the corresponding parameter in the supertype 'Listener' is named 'data'. This may cause problems when calling this function with named arguments.
    override fun onMediaDataLoaded(key: String, oldKey: String?, info: MediaData) {
                                                                 ^
frameworks/base/packages/SystemUI/src/com/android/systemui/media/MediaSessionBasedFilter.kt:126:83: warning: unnecessary safe call on a non-null receiver of type MediaController?
                Log.d(TAG, "filtering key=$key local=${info.token} remote=${remote?.sessionToken}")
                                                                                  ^
frameworks/base/packages/SystemUI/src/com/android/systemui/media/SeekBarObserver.kt:64:22: warning: unnecessary safe call on a non-null receiver of type Int
        data.duration?.let {
                     ^
frameworks/base/packages/SystemUI/src/com/android/systemui/media/SeekBarViewModel.kt:224:39: warning: elvis operator (?:) always returns the left operand of non-nullable type Int
        val duration = _data.duration ?: -1
                                      ^
frameworks/base/packages/SystemUI/src/com/android/systemui/statusbar/notification/collection/NotifViewManager.kt:200:14: warning: parameter 'fd' is never used
    fun dump(fd: FileDescriptor, pw: PrintWriter, args: Array<String>) {
             ^
frameworks/base/packages/SystemUI/src/com/android/systemui/statusbar/notification/collection/NotifViewManager.kt:200:34: warning: parameter 'pw' is never used
    fun dump(fd: FileDescriptor, pw: PrintWriter, args: Array<String>) {
                                 ^
frameworks/base/packages/SystemUI/src/com/android/systemui/statusbar/notification/collection/NotifViewManager.kt:200:51: warning: parameter 'args' is never used
    fun dump(fd: FileDescriptor, pw: PrintWriter, args: Array<String>) {
                                                  ^
frameworks/base/packages/SystemUI/src/com/android/systemui/statusbar/notification/collection/notifcollection/NotifEvent.kt:95:18: warning: 'onRankingUpdate(NotificationListenerService.RankingMap!): Unit' is deprecated. Deprecated in Java
        listener.onRankingUpdate(rankingMap)
                 ^
frameworks/base/packages/SystemUI/src/com/android/systemui/statusbar/notification/people/PeopleNotificationIdentifier.kt:73:31: warning: name shadowed: type
                    when (val type = upperBound(type, extractPersonTypeInfo(sbn))) {
                              ^
frameworks/base/packages/SystemUI/src/com/android/systemui/statusbar/notification/row/PriorityOnboardingDialogController.kt:89:44: warning: unnecessary safe call on a non-null receiver of type NotificationConversationInfo.OnConversationSettingsClickListener
        onConversationSettingsClickListener?.onClick()
                                           ^
frameworks/base/packages/SystemUI/src/com/android/systemui/statusbar/notification/row/PriorityOnboardingDialogController.kt:176:22: warning: 'getColor(Int): Int' is deprecated. Deprecated in Java
                    .getColor(com.android.internal.R.color.conversation_important_highlight)
                     ^
frameworks/base/packages/SystemUI/src/com/android/systemui/statusbar/notification/row/PriorityOnboardingDialogController.kt:184:17: warning: variable 'largeSize' is never used
            val largeSize = baseSize + largeThickness * 2
                ^
frameworks/base/packages/SystemUI/src/com/android/systemui/statusbar/notification/stack/ForegroundServiceSectionController.kt:74:9: warning: parameter 'key' is never used
        key: String,
        ^
frameworks/base/packages/SystemUI/src/com/android/systemui/statusbar/notification/stack/ForegroundServiceSectionController.kt:81:13: warning: variable 'isAppCancel' is never used
        val isAppCancel = reason == REASON_APP_CANCEL || reason == REASON_APP_CANCEL_ALL
            ^
frameworks/base/packages/SystemUI/src/com/android/systemui/statusbar/notification/stack/NotificationSectionsManager.kt:137:75: warning: unchecked cast: View! to T
        val inflated = layoutInflater.inflate(layoutResId, parent, false) as T
                                                                          ^
frameworks/base/packages/SystemUI/src/com/android/systemui/util/RelativeTouchListener.kt:93:27: warning: 'constructor Handler()' is deprecated. Deprecated in Java
    private val handler = Handler()
                          ^
frameworks/base/packages/SystemUI/src/com/android/systemui/util/magnetictarget/MagnetizedObject.kt:465:22: warning: 'vibrate(Long): Unit' is deprecated. Deprecated in Java
            vibrator.vibrate(effect.toLong())
                     ^
14:20:26 ninja failed with: exit status 1
```
错误原因未知

## 0116v2
### 修改内容
1. ==0116
    - 自启动
2. 修改位于`frameworks\base\services\devicepolicy\java\com\android\server\devicepolicy`的`DevicePolicyManagerService.java`，在`setLockTaskPackages`方法中添加如下代码
    - 白名单
```java
// ilee modify here --start
List<String> lockTaskPackages = new ArrayList<>(Arrays.asList(packages));
lockTaskPackages.add("dji.go.v5");
// ilee modify here --end

synchronized (getLockObject()) {
    enforceCanCallLockTaskLocked(who);
    final int userHandle = mInjector.userHandleGetCallingUserId();
    // ilee modify here --start
    setLockTaskPackagesLocked(userHandle, lockTaskPackages);
    // ilee modify here --end
}
```
3. ==0116
4. ==0116
5. ==0116
### 编译结果

## 0116v3
### 修改内容
1. ==0116
2. 修改位于`frameworks\base\services\core\java\com\android\server\wm`的`LockTaskController.java`，在`LockTaskController`方法中添加如下代码
```java
// ilee modify here --start
mLockTaskPackages.put(UserHandle.USER_SYSTEM, new String[]{
        "dji.go.v5"
});
// ilee modify here --end
```
3. ==0116
4. ==0116
5. ==0116
### 编译结果

## 0116v4
failed
### 修改内容
1. 修改来自`frameworks/base/packages/SystemUI/src/com/android/systemui`的`SystemUIService.java`文件
    - 自启动
在构造函数中添加
```java
// ilee modify here --start
this.executeCMD("su","appops set dji.go.v5 WRITE_SETTINGS allow");
this.executeCMD("su","appops set dji.go.v5 SYSTEM_ALERT_WINDOW allow");
this.executeCMD("su","appops set dji.go.v5 MANAGE_EXTERNAL_STORAGE allow");
this.executeCMD("su","pm grant dji.go.v5 android.permission.CAMERA");
this.executeCMD("su","pm grant dji.go.v5 android.permission.READ_PHONE_STATE");
this.executeCMD("su","pm grant dji.go.v5 android.permission.WRITE_MEDIA_STORAGE");
this.executeCMD("su","pm grant dji.go.v5 android.permission.ACCESS_FINE_LOCATION");
this.executeCMD("su","pm grant dji.go.v5 android.permission.RECORD_AUDIO");
this.executeCMD("su","pm grant dji.go.v5 android.permission.CALL_PHONE");
this.executeCMD("su","pm grant dji.go.v5 android.permission.GET_ACCOUNTS");
this.executeCMD("su","pm grant dji.go.v5 android.permission.READ_EXTERNAL_STORAGE");
this.executeCMD("su","pm grant dji.go.v5 android.permission.WRITE_EXTERNAL_STORAGE");
this.executeCMD("su","pm grant dji.go.v5 android.permission.READ_MEDIA_AUDIO");
this.executeCMD("su","pm grant dji.go.v5 android.permission.READ_MEDIA_VIDEO");
this.executeCMD("su","pm grant dji.go.v5 android.permission.READ_MEDIA_IMAGES");

this.executeCMD("su","am start -n dji.go.v5/com.dji.component.application.activity.DJIPureLaunchActivity");
// ilee modify here --end
```
2. 
    - 白名单
```java
```
### 编译结果
失败

## 0116v4
### 修改内容
1. 修改来自`frameworks/base/packages/SystemUI/src/com/android/systemui`的`SystemUIService.java`文件
    - 自启动
在`onCreate`函数中添加
```java
// ilee modify here --start
Context context = getApplicationContext();
String kioskPackage = "dji.go.v5"; // 第三方应用包名
PackageManager pm = context.getPackageManager();
Intent intent = pm.getLaunchIntentForPackage(kioskPackage);
if (intent != null) {
    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    context.startActivity(intent);
}
// ilee modify here --end
```
2. 
    - 白名单
```java
```
### 编译结果


## 0117v2
1. 内置应用 work 
2. 自启动 work
### 修改内容
1. 添加启动代码到`frameworks/base/services/java/com/android/server/SystemServer.java`的`startOtherServices()`方法中
```java
// line 43
// ilee modify here 1 line
import android.content.BroadcastReceiver;

// 系统服务启动完成后，添加以下代码
// line:2247
// ilee modify here --start
registerBootCompletedReceiver(context);
// ilee modify here --end

// line 2497
// ilee modify here --start
private void registerBootCompletedReceiver(Context context) {
    IntentFilter filter = new IntentFilter(Intent.ACTION_BOOT_COMPLETED);
    context.registerReceiver(new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            if (Intent.ACTION_BOOT_COMPLETED.equals(intent.getAction())) {
                startKioskApp(context);
            }
        }
    }, filter);
}

private void startKioskApp(Context context) {
    String kioskPackage = "dji.go.v5"; // 第三方应用包名
    Intent intent = context.getPackageManager().getLaunchIntentForPackage(kioskPackage);
    if (intent != null) {
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);
    }
}
// ilee modify here --end
```
2. 将应用添加到白名单`frameworks/base/core/res/res/values/config.xml`中添加
```xml
<string-array name="lock_task_packages">
    <item>com.example.thirdpartyapp</item>
</string-array>
```
3. 在`device\rockchip\rk356x\rk3566_tspi\rk3566_tspi.mk`中添加属性`persist.sys.def_launherpag`
**rk3566_tspi.mk**
```mk
PRODUCT_PROPERTY_OVERRIDES += persist.sys.def_launherpag=dji.go.v5

```
4. 添加应用到`device\rockchip\rk356x\rk3566_tspi\preinstall\`
,我就直接把应用`DJIFly.apk`丢进`preinstall`中
```
DJIFly
 |-- DJIFly.apk
 |-- Android.mk
 |-- lib
Android.mk
preinstall.mk
```
**Android.mk**
```Android.mk
include $(call all-subdir-makefiles)


```
**preinstall.mk**
```preinstall.mk
PRODUCT_PACKAGES += DJIFly

```
5. 修改底部导航栏功能并隐藏
```java
```

### 编译结果

## 0117v3
### 修改内容
1. 添加启动代码到`frameworks/base/services/java/com/android/server/SystemServer.java`的`startOtherServices()`方法中
```java
// line 43
// ilee modify here 1 line
import android.content.BroadcastReceiver;

// 系统服务启动完成后，添加以下代码
// line:2247
// ilee modify here --start
registerBootCompletedReceiver(context);
// ilee modify here --end

// line 2497
// ilee modify here --start
private void registerBootCompletedReceiver(Context context) {
    IntentFilter filter = new IntentFilter(Intent.ACTION_BOOT_COMPLETED);
    context.registerReceiver(new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            if (Intent.ACTION_BOOT_COMPLETED.equals(intent.getAction())) {
                startKioskApp(context);
            }
        }
    }, filter);
}

private void startKioskApp(Context context) {
    // kiosk mode
    ActivityOptions options = ActivityOptions.makeBasic();
    options.setLockTaskEnabled(true);

    String kioskPackage = "dji.go.v5"; // 第三方应用包名
    Intent intent = context.getPackageManager().getLaunchIntentForPackage(kioskPackage);
    if (intent != null) {
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        // modify to kiosk bundle
        context.startActivity(intent, options.toBundle());
    }
}
// ilee modify here --end
```
2. 将应用添加到白名单`frameworks/base/core/res/res/values/config.xml`中添加
```xml
<string-array name="lock_task_packages">
    <item>com.example.thirdpartyapp</item>
</string-array>
```
3. 在`device\rockchip\rk356x\rk3566_tspi\rk3566_tspi.mk`中添加属性`persist.sys.def_launherpag`
**rk3566_tspi.mk**
```mk
PRODUCT_PROPERTY_OVERRIDES += persist.sys.def_launherpag=dji.go.v5

```
4. 添加应用到`device\rockchip\rk356x\rk3566_tspi\preinstall\`
,我就直接把应用`DJIFly.apk`丢进`preinstall`中
```
DJIFly
 |-- DJIFly.apk
 |-- Android.mk
 |-- lib
Android.mk
preinstall.mk
```
**Android.mk**
```Android.mk
include $(call all-subdir-makefiles)


```
**preinstall.mk**
```preinstall.mk
PRODUCT_PACKAGES += DJIFly

```
5. 修改底部导航栏功能并隐藏
```java
```

### 编译结果
刷入固件，反复重启

## 0117v4
1. 内置应用 work 
2. 自启动 work
3. logo修改
4. 导航栏隐藏
### 修改内容
1. 添加启动代码到`frameworks/base/services/java/com/android/server/SystemServer.java`的`startOtherServices()`方法中
```java
// line 43
// ilee modify here 1 line
import android.content.BroadcastReceiver;

// 系统服务启动完成后，添加以下代码
// line:2247
// ilee modify here --start
registerBootCompletedReceiver(context);
// ilee modify here --end

// line 2497
// ilee modify here --start
private void registerBootCompletedReceiver(Context context) {
    IntentFilter filter = new IntentFilter(Intent.ACTION_BOOT_COMPLETED);
    context.registerReceiver(new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            if (Intent.ACTION_BOOT_COMPLETED.equals(intent.getAction())) {
                startKioskApp(context);
            }
        }
    }, filter);
}

private void startKioskApp(Context context) {
    String kioskPackage = "dji.go.v5";
    Intent intent = context.getPackageManager().getLaunchIntentForPackage(kioskPackage);
    if (intent != null) {
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);

        // ActivityManager am = (ActivityManager) context.getSystemService(Context.ACTIVITY_SERVICE);
        // boolean isInLockTask = am.getLockTaskModeState() != ActivityManager.LOCK_TASK_MODE_NONE;
        // if (!isInLockTask) {
        //     startLockTask();
        // }
    }
}
// ilee modify here --end
```
2. 将应用添加到白名单`frameworks/base/core/res/res/values/config.xml`中添加
```xml
<string-array name="lock_task_packages">
    <item>com.example.thirdpartyapp</item>
</string-array>
```
3. 在`device\rockchip\rk356x\rk3566_tspi\rk3566_tspi.mk`中添加属性`persist.sys.def_launherpag`
**rk3566_tspi.mk**
```mk
PRODUCT_PROPERTY_OVERRIDES += persist.sys.def_launherpag=dji.go.v5

```
4. 添加应用到`device\rockchip\rk356x\rk3566_tspi\preinstall\`
,我就直接把应用`DJIFly.apk`丢进`preinstall`中
```
DJIFly
 |-- DJIFly.apk
 |-- Android.mk
 |-- lib
Android.mk
preinstall.mk
```
**Android.mk**
```Android.mk
include $(call all-subdir-makefiles)


```
**preinstall.mk**
```preinstall.mk
PRODUCT_PACKAGES += DJIFly

```
5. 修改底部导航栏功能并隐藏
**取消功能**
修改位于`frameworks/base/services/core/java/com/android/server/policy`的`PhoneWindowManager.java`文件
```java
// ilee modify here --start
if (keyCode == KeyEvent.KEYCODE_BACK) {
    return -1;
}
if (keyCode == KeyEvent.KEYCODE_HOME) {
    return -1;
}
if (keyCode == KeyEvent.KEYCODE_APP_SWITCH) {
    return -1;
}
// ilee modify here --end
```
**隐藏导航栏**
修改位于`frameworks/base/packages/SystemUI/src/com/android/systemui/statusbar/phone`的`NavigationBarView.java`文件
```java
// line:1213
// ilee modify here --start
setSystemUiVisibility(View.SYSTEM_UI_FLAG_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
```

### 编译结果



## 0117v4
1. 内置应用 work 
2. 自启动 work
3. logo修改
4. 导航栏隐藏
### 修改内容
1. 添加启动代码到`frameworks/base/services/java/com/android/server/SystemServer.java`的`startOtherServices()`方法中
```java
// line 43
// ilee modify here 1 line
import android.content.BroadcastReceiver;

// 系统服务启动完成后，添加以下代码
// line:2247
// ilee modify here --start
registerBootCompletedReceiver(context);
// ilee modify here --end

// line 2497
// ilee modify here --start
private void registerBootCompletedReceiver(Context context) {
    IntentFilter filter = new IntentFilter(Intent.ACTION_BOOT_COMPLETED);
    context.registerReceiver(new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            if (Intent.ACTION_BOOT_COMPLETED.equals(intent.getAction())) {
                startKioskApp(context);
            }
        }
    }, filter);
}

private void startKioskApp(Context context) {
    String kioskPackage = "dji.go.v5";
    Intent intent = context.getPackageManager().getLaunchIntentForPackage(kioskPackage);
    if (intent != null) {
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);

        // kiosk start
        int taskId = -1;
        ActivityManager am = (ActivityManager) context.getSystemService(Context.ACTIVITY_SERVICE);
        List<ActivityManager.AppTask> tasks = am.getAppTasks();
        if (tasks != null) {
            for (ActivityManager.AppTask task : tasks) {
                if (task.getTaskInfo().topActivity != null && task.getTaskInfo().topActivity.getPackageName().equals(kioskPackage)) {
                    taskId = task.getTaskInfo().taskId;
                    break;
                }
            }
        }
        if (taskId > 0) {
            try {
                ActivityTaskManager.getService().startSystemLockTaskMode(taskId);
            } catch (Exception e) {

            }
        }
        // kiosk end
    //            boolean isInLockTask = am.getLockTaskModeState() != ActivityManager.LOCK_TASK_MODE_NONE;
    //            if (!isInLockTask) {
    //                startLockTask();
    //            }
    }
}
// ilee modify here --end
```
2. 将应用添加到白名单`frameworks/base/core/res/res/values/config.xml`中添加
```xml
<string-array name="lock_task_packages">
    <item>com.example.thirdpartyapp</item>
</string-array>
```
3. 在`device\rockchip\rk356x\rk3566_tspi\rk3566_tspi.mk`中添加属性`persist.sys.def_launherpag`
**rk3566_tspi.mk**
```mk
PRODUCT_PROPERTY_OVERRIDES += persist.sys.def_launherpag=dji.go.v5

```
4. 添加应用到`device\rockchip\rk356x\rk3566_tspi\preinstall\`
,我就直接把应用`DJIFly.apk`丢进`preinstall`中
```
DJIFly
 |-- DJIFly.apk
 |-- Android.mk
 |-- lib
Android.mk
preinstall.mk
```
**Android.mk**
```Android.mk
include $(call all-subdir-makefiles)


```
**preinstall.mk**
```preinstall.mk
PRODUCT_PACKAGES += DJIFly

```
5. 修改底部导航栏功能并隐藏
**取消功能**
修改位于`frameworks/base/services/core/java/com/android/server/policy`的`PhoneWindowManager.java`文件
```java
// ilee modify here --start
if (keyCode == KeyEvent.KEYCODE_BACK) {
    return -1;
}
if (keyCode == KeyEvent.KEYCODE_HOME) {
    return -1;
}
if (keyCode == KeyEvent.KEYCODE_APP_SWITCH) {
    return -1;
}
// ilee modify here --end
```
**隐藏导航栏**
修改位于`frameworks/base/packages/SystemUI/src/com/android/systemui/statusbar/phone`的`NavigationBarView.java`文件
```java
// line:1213
// ilee modify here --start
setSystemUiVisibility(View.SYSTEM_UI_FLAG_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
```

### 编译结果


1. 修改来自`frameworks/base/packages/SystemUI/src/com/android/systemui`的`SystemUIApplication.java`文件
暴力开启
1. 修改来自`frameworks\base\services\core\java\com\android\server\am`的`ActivityManagerService.java`文件



## 0120v1

### 修改内容
1. 添加代码到`frameworks/base/services/core/java/com/android/server/wm`中的`ActivityTaskManagerService.java`文件中的`getHomeIntent`方法
```java
// line: 5870
// ilee modify here --start
Settings.Global.putInt(mContext.getContentResolver(), Settings.Global.DEVICE_PROVISIONED, 1);
Settings.Secure.putInt(mContext.getContentResolver(), Settings.Secure.USER_SETUP_COMPLETE, 1);
String defStartPkg = "dji.go.v5";
Intent queryIntent = new Intent();
final PackageManager mPm = mContext.getPackageManager();
queryIntent.addCategory(Intent.CATEGORY_LAUNCHER);
queryIntent.setAction(Intent.ACTION_MAIN);
List<ResolveInfo> homeActivities = mPm.queryIntentActivities(queryIntent, 0);
if (homeActivities != null) {
    int activityNum = homeActivities.size();
    ComponentName[] set = new ComponentName[activityNum];
    for (int i = 0; i < activityNum; i++) {
        ResolveInfo info = homeActivities.get(i);
        set[i] = new ComponentName(info.activityInfo.packageName, info.activityInfo.name);
        if (defStartPkg.equals(info.activityInfo.packageName)) {
            Intent intentaa = new Intent(mTopAction, mTopData != null ? Uri.parse(mTopData) : null);
            intentaa.setComponent(set[i]);
            intentaa.addCategory(Intent.CATEGORY_HOME);
            return intentaa;
        }
    }
}
// ilee modify here --end
```

### 编译结果

## 0120v2
### 修改内容
1. ==0120v1
2. 修改来自`frameworks/base/core/java/android/app/StatusBarManager.java`的`disable`方法
```java
// line: 233
// ilee modify here 1 line
what = what | DISABLE_EXPAND;
```
3. `frameworks/base/packages/SystemUI/src/com/android/systemui/statusbar/phone/PhoneStatusBarView.java`的`onTouchEvent`方法
```java
//line: 224
// ilee modify here --start
// return barConsumedEvent || super.onTouchEvent(event);
    return true;
// ilee modify here --end
```
4. 修改底部导航栏功能
**取消功能**
修改位于`frameworks/base/services/core/java/com/android/server/policy`的`PhoneWindowManager.java`文件
```java
// line: 2673
// ilee modify here --start
if (keyCode == KeyEvent.KEYCODE_BACK) {
    return -1;
}
if (keyCode == KeyEvent.KEYCODE_HOME) {
    return -1;
}
if (keyCode == KeyEvent.KEYCODE_APP_SWITCH) {
    return -1;
}
//        if (keyCode == KeyEvent.KEYCODE_RECENT_APPS) {
//            return -1;
//        }
if (keyCode == KeyEvent.KEYCODE_NAVIGATE_IN) {
    return -1;
}
if (keyCode == KeyEvent.KEYCODE_NAVIGATE_OUT) {
    return -1;
}
if (keyCode == KeyEvent.KEYCODE_NAVIGATE_NEXT) {
    return -1;
}
if (keyCode == KeyEvent.KEYCODE_NAVIGATE_PREVIOUS) {
    return -1;
}
// ilee modify here --end
```
### 编译结果
开机自启
仍然可以使用近期应用界面
下拉栏无法使用
返回键和HOME键也无法使用


### 添加

#### 设置特定包为默认启动应用
### 修改内容
1. 添加代码到`frameworks/base/services/core/java/com/android/server/wm`中的`ActivityTaskManagerService.java`文件中的`getHomeIntent`方法
```java
// line: 5870
// ilee modify here --start
Settings.Global.putInt(mContext.getContentResolver(), Settings.Global.DEVICE_PROVISIONED, 1);
Settings.Secure.putInt(mContext.getContentResolver(), Settings.Secure.USER_SETUP_COMPLETE, 1);
String defStartPkg = "dji.go.v5";
Intent queryIntent = new Intent();
final PackageManager mPm = mContext.getPackageManager();
queryIntent.addCategory(Intent.CATEGORY_LAUNCHER);
queryIntent.setAction(Intent.ACTION_MAIN);
List<ResolveInfo> homeActivities = mPm.queryIntentActivities(queryIntent, 0);
if (homeActivities != null) {
    int activityNum = homeActivities.size();
    ComponentName[] set = new ComponentName[activityNum];
    for (int i = 0; i < activityNum; i++) {
        ResolveInfo info = homeActivities.get(i);
        set[i] = new ComponentName(info.activityInfo.packageName, info.activityInfo.name);
        if (defStartPkg.equals(info.activityInfo.packageName)) {
            Intent intentaa = new Intent(mTopAction, mTopData != null ? Uri.parse(mTopData) : null);
            intentaa.setComponent(set[i]);
            intentaa.addCategory(Intent.CATEGORY_HOME);
            return intentaa;
        }
    }
}
// ilee modify here --end
```

#### 取消绘制底部按钮
1. 修改`frameworks/base/core/res/res/values/dimens.xml`
```xml
    <!--    ilee modify here start  -->
    <dimen name="navigation_bar_height">0dp</dimen>
    <!-- Height of the bottom navigation bar in portrait; often the same as @dimen/navigation_bar_height -->
    <dimen name="navigation_bar_height_landscape">0dp</dimen>
    <!--    ilee modify here end  -->
```
2. 修改`frameworks/base/packages/SystemUI/src/com/android/systemui/statusbar/phone/NavigationHandle.java`
```java
// line: 81
// ilee modify here 1 line
// canvas.drawRoundRect(0, y, width, y + height, mRadius, mRadius, mPaint);
```
3. 修改底部导航栏功能
**取消功能**
修改位于`frameworks/base/services/core/java/com/android/server/policy`的`PhoneWindowManager.java`文件
```java
// line: 2673
// ilee modify here --start
if (keyCode == KeyEvent.KEYCODE_BACK) {
    return -1;
}
if (keyCode == KeyEvent.KEYCODE_HOME) {
    return -1;
}
if (keyCode == KeyEvent.KEYCODE_APP_SWITCH) {
    return -1;
}
//        if (keyCode == KeyEvent.KEYCODE_RECENT_APPS) {
//            return -1;
//        }
if (keyCode == KeyEvent.KEYCODE_MENU
        || keyCode == KeyEvent.KEYCODE_ALL_APPS) {
    return -1;
}
if (keyCode == KeyEvent.KEYCODE_NAVIGATE_IN) {
    return -1;
}
if (keyCode == KeyEvent.KEYCODE_NAVIGATE_OUT) {
    return -1;
}
if (keyCode == KeyEvent.KEYCODE_NAVIGATE_NEXT) {
    return -1;
}
if (keyCode == KeyEvent.KEYCODE_NAVIGATE_PREVIOUS) {
    return -1;
}
// ilee modify here --end
```

### 添加
#### 修改 Logo
**安卓开机Logo**
1. 修改`frameworks/base/core/res/assets/images`内的`android-logo-mask.png`文件
**主板logo**
1. 修改`kernel`内的`logo.bmp`以及`logo_kernel.bmp`文件


### 添加
#### 去掉开机 正在启动弹窗
1. 修改`frameworks/base/services/core/java/com/android/server/wm/WindowManagerService.java`中的`performEnableScreen`方法
```java
// line: 3453
// ilee modify here --start
/* if (!mBootAnimationStopped) {
    Trace.asyncTraceBegin(TRACE_TAG_WINDOW_MANAGER, "Stop bootanim", 0);
    // stop boot animation
    // formerly we would just kill the process, but we now ask it to exit so it
    // can choose where to stop the animation.
    SystemProperties.set("service.bootanim.exit", "1");
    mBootAnimationStopped = true;
}

if (!mForceDisplayEnabled && !checkBootAnimationCompleteLocked()) {
    ProtoLog.i(WM_DEBUG_BOOT, "performEnableScreen: Waiting for anim complete");
    return;
}

try {
    IBinder surfaceFlinger = ServiceManager.getService("SurfaceFlinger");
    if (surfaceFlinger != null) {
        ProtoLog.i(WM_ERROR, "******* TELLING SURFACE FLINGER WE ARE BOOTED!");
        Parcel data = Parcel.obtain();
        data.writeInterfaceToken("android.ui.ISurfaceComposer");
        surfaceFlinger.transact(IBinder.FIRST_CALL_TRANSACTION, // BOOT_FINISHED
                data, null, 0);
        data.recycle();
    }
} catch (RemoteException ex) {
    ProtoLog.e(WM_ERROR, "Boot completed: SurfaceFlinger is dead!");
} */
// ilee modify here --end
```
2. 修改`frameworks/base/services/core/java/com/android/server/wm/ActivityRecord.java`中的`onWindowsDrawn`方法
```java
// line: 5413
        // ilee modify here --start
        if (isHomeIntent(intent) && shortComponentName != null && !shortComponentName.contains("FallbackHome")) {
            SystemProperties.set("service.bootanim.exit", "1");
            Log.e("ActivityRecord", "real home....." + shortComponentName);

            //SystemService.stop("bootanim");
            try {
                IBinder surfaceFlinger = ServiceManager.getService("SurfaceFlinger");
                if (surfaceFlinger != null) {
                    Slog.i(TAG_WM, "******* TELLING SURFACE FLINGER WE ARE BOOTED!");
                    Parcel data = Parcel.obtain();
                    data.writeInterfaceToken("android.ui.ISurfaceComposer");
                    surfaceFlinger.transact(IBinder.FIRST_CALL_TRANSACTION, // BOOT_FINISHED
                            data, null, 0);
                    data.recycle();
                }
            } catch (RemoteException ex) {
                Slog.e(TAG_WM, "Boot completed: SurfaceFlinger is dead!");
            }
        }
        // ilee modify here --end
```
3. 修改`packages/apps/Settings/src/com/android/settings/FallbackHome.java`中的`mProgressTimeoutRunnable`方法
```java
// line: 52
    private final Runnable mProgressTimeoutRunnable = () -> {
        // ilee modify here --start
//        View v = getLayoutInflater().inflate(
//                R.layout.fallback_home_finishing_boot, null /* root */);
//        setContentView(v);
//        v.setAlpha(0f);
//        v.animate()
//                .alpha(1f)
//                .setDuration(500)
//                .setInterpolator(AnimationUtils.loadInterpolator(
//                        this, android.R.interpolator.fast_out_slow_in))
//                .start();
        // ilee modify here --end
        getWindow().addFlags(LayoutParams.FLAG_KEEP_SCREEN_ON);
    };
```

#### 默认手势导航
1. 修改`frameworks/base/core/res/res/values/config.xml`文件
```xml
    <!-- Controls the navigation bar interaction mode:
         0: 3 button mode (back, home, overview buttons)
         1: 2 button mode (back, home buttons + swipe up for overview)
         2: gestures only for back, home and overview -->
    <integer name="config_navBarInteractionMode">0</integer>
```


## 参考资料
1. 开机自启动
    - [默认Launcher（全网最全、任意Android版本、任意应用）](https://blog.csdn.net/u010823818/article/details/144415966?fromshare=blogdetail&sharetype=blogdetail&sharerId=144415966&sharerefer=PC&sharesource=weixin_50843001&sharefrom=from_link)
    - [开机直接进入该应用作为默认launcher（霸屏）或者开机自启指定应用](https://blog.csdn.net/youthking1314/article/details/128393909?fromshare=blogdetail&sharetype=blogdetail&sharerId=128393909&sharerefer=PC&sharesource=weixin_50843001&sharefrom=from_link)
2. 应用内置
    - [RK平台如何 将第三方资源文件和代码编译到系统内](https://blog.csdn.net/HuanWen_Cheng/article/details/141065714?fromshare=blogdetail&sharetype=blogdetail&sharerId=141065714&sharerefer=PC&sharesource=weixin_50843001&sharefrom=from_link)
    - [【RK3568】Android 11预装（内置）应用到系统中](https://www.jianshu.com/p/fafff8d985a3)
    - [基于迅为RK3568开发板全国产平台，快速实现APP开机自启动技术分享](https://www.cnblogs.com/topeet/p/18560526)
    - [Android 10 RK 集成第三方apk](https://blog.csdn.net/a546036242/article/details/121992823)
3. 取消导航栏功能
    - [android11源码去掉底部虚拟按钮导航](https://blog.csdn.net/jingzhemodao/article/details/131088784)
    - [Android6.0 源码修改之屏蔽导航栏虚拟按键（Home和RecentAPP）/动态显示和隐藏NavigationBar](https://developer.aliyun.com/article/1196768)
    - [Android11以上系统实现app霸屏的一种设置](https://blog.csdn.net/hedalei/article/details/140021960)
    - [Android KeyEvent 按键事件](https://www.60if.com/361.html)
4. 取消下拉栏
    - [Android系统开发 禁止状态栏下拉功能](https://www.cnblogs.com/guanxinjing/p/17969803)
5. 修改Android开机logo
    - [2021-09-18 Android 开机logo修改和简单代码分析](https://blog.csdn.net/qq_37858386/article/details/120365883)
6. 修改开机屏幕中心弹窗
    - [方法|rk3568开发平台如何去除android正在启动弹窗](https://blog.csdn.net/TQ_wangbin/article/details/135132729?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-1-135132729-blog-124710885.235^v43^pc_blog_bottom_relevance_base9&spm=1001.2101.3001.4242.2&utm_relevant_index=4)
    - [RK3566RK3568开发板Android11屏蔽开机启动提示，优化启动时间](https://mbb.eet-china.com/blog/4098392-461673.html)
7. 消除消息提示弹窗
    - [方法|rk3568开发平台如何去除android正在启动弹窗](https://blog.csdn.net/TQ_wangbin/article/details/135132729?fromshare=blogdetail&sharetype=blogdetail&sharerId=135132729&sharerefer=PC&sharesource=weixin_50843001&sharefrom=from_link) 貌似一并解决了
    - []()


