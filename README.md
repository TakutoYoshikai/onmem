# onmem
onmem is a network tmp directory.

### Requirements
* Ubuntu 20.10
* Node.js

### Usage
**install**
```bash
npm install -g TakutoYoshikai/onmem
```

**run process (public on network)**
```bash
onmem-run public
```

**run process (private on network)**
```bash
onmem-run
```

**set data**
```bash
echo <data> | onmem-post <DATA ID YOU DECIDED> <REMOTE HOST>
```

**get data**
```bash
onmem <DATA ID>
```

**get data from remote computer**
```bash
onmem <REMOTE HOST> <DATA ID>
```

**get key list**
```bash
onmem
```

### Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

### License
MIT License
