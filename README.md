# onmem
onmem is a data storage on memory. You should think it as a clipboard.

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
echo <data> | onmem-post <DATA ID YOU DECIDED>
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

### License
MIT License
