# load_lib

<img src="https://github.com/user-attachments/assets/d132c82b-10a9-4457-8840-0b74c38d682c" align="left">

```greyscript
lib = load_lib;
lib = load_lib("metaxploit.so");
lib = load_lib("metaxploit.so", "/lib");
lib = load_lib("metaxploit.so", "/lib", "MetatxploitLib");
// All Output: typeof(lib) == "MetaxploitLib"
```

---

![image](https://github.com/user-attachments/assets/641049f3-8f56-49d9-b138-12132f238ab1)


### Additional Function Methods

- **`force_params(usage, numReqParams)`**: Force paramater usage and add help 
- **`app_name()`**: Gets name of program {self}
- **`is_null()`**: Checks if object is null; if null, print / return / exit options
- **`is_type()`**: Checks Types and specifies on-fail action
- **`network_device_list()`**: Returns Network devices in a list
- **`calc_ack()`**: Caculates the recommended amount of ACKs to collect
- **`bool_text()`** Convert integer boolean to text boolean
