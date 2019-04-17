import Game from './game';
import { animate } from 'favicon.js';

new Game();

animate([
"data: image / png; base64, iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC / xhBQAAAAFzUkdCAK7OHOkAAAAzUExURfusEelORvy9RG6 / SeMeE + pRSv7cnbffpfmsQt7w1Py3MpLEWtqxII + 0 WvWrqOc9NEdwTKtwAtQAAAARdFJOU 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",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURT7O8PusEW6/SelORvy9ROMeE+hDO/uxOJPPeP3Nc8LksqHo+dmxIYW9RIGqRO57dvzBUGLX853m90dwTPJild4AAAAUdFJOU/////////////////////////8AT0/nEQAAAxNJREFUeNrt2mlyUzEUROE4YDskQALsf6/MkMGDhlbZ3ff0BvTOV6p6f3Tz7ap2s2QPp04EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEC9L61LBVhR9VX0aQC4AjxwAwAAAAAAAOA3CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADANQBc8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAF4LF9Tx9W7P7CAO/at3+v337zdGGA3UUB9pvaAD/6SwP87K8M8Ku/MMDv/roAf/rLAvztrwrwr78owP/+mgDP+ksCPO+vCPCivyDAy/56AK/6ywG87q8G8Ka/GMDb/loAB/pLARzqrwRwsL8QwOH+OgBH+ssAHOuvAnC0vwjA8f4aACf6SwCc6q8AcLK/AMDp/nyAM/3xAOf60wHO9ocDnO/PBmjojwZo6U8GaOoPBmjrzwVo7I8FaO1PBWjuDwVo788E6OjffLxvnwtAT//m023z7kwAuvoDAfr68wA6++MAevvTALr7wwD6+7MABvqjAEb6kwCG+oMAxvpzAAb7YwBG+1MAhvtDAMb7MwAm+iMAZvoTAKb6AwDm+v0BJvvtAWb73QGm+80B5vu9AQT91gCKfmcASb8xgKbfF0DUbwug6ncFkPWbAuj6PQGE/ZYAyn5HAGm/IYC23w9A3G8HoO53A5D3mwHo+70AFvRbAazoNwLYLel3Auh5/9q+HoAFT2rbAXbbjn2+veTuVgB09QcC9PXnAXT2xwH09qcBdPeHAfT3ZwEM9EcBjPQnAQz1BwGM9ecADPbHAIz2pwAM94cAjPdnAEz0RwDM9CcATPUHAMz1+wNM9tsDzPa7A0z3mwPM93sDCPqtART9zgCSfmMATb8vgKjfFkDV7wog6zcF0PV7Agj7LQGU/Y4A0n5DAG2/H4C43w5A3e8GIO83A9D3ewEs6LcCWNFvBbAtDrAtDvAdip/l7X88KxwAAAAASUVORK5CYII=",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURT7O8Py9RPusEelORm6/SeMeEwC97OhDO5PPeIO0RPmrP8Lw+vy3Mv3Nc8DjsWPX8xrF79mxIe57dpDj9v7ks0dwTDLThYsAAAAWdFJOU////////////////////////////wAB0sDkAAAD20lEQVR42u3aWUJTURBFUYiGYEAJivOfqvSkec2tuvVMTlMjqL2+z9Vf8bsygAEMYAADGMAABjCAAQxgAAMYwAAGMIABzvrOIndnAAMYwAAGMIABVAF24gC7G22A3Y02wHO/NMBLvzLAa78wwFu/LsB7vyzAR78qwGe/KMBXvybAXr8kwH6/IsBBvyDAYb8ewFG/HMBxvxrASb8YwGm/FsBAvxTAUL8SwGC/EMBwvw7ASL8MwFi/CsBovwjAeL8GwES/BMBUvwLAZL8AwHT/BQD8ab1A9MPXXf4+4H+vHiKvGcAABjCAAQxgAAMYwABYADtxgOn9Kz/AzP6VHmBu/8oOMLt/JQeY379yAzTsX6kBWvavzABN+1digLb9Ky9A4/6VFqB1/8oK0Lx/JQVo379yAgT2r5QAkf0rI0Bo/0oIENu/8gEE9690ANH9KxtAeP9KBhDfv3IBJPavVACZ/SsTQGr/SgSQ27/yACT3rzQA2f0rC0B6/0oCkN+/cgB07F8vDuAhcVT7gAs+AxjAAAYwgAEMYAADGMAABjCAAQxgAAMYwAAGMIABlAB+t9/25wL39HRmgG/tt72uv/vV9ZkBNmcFuF9pAzz3SwO89CsDvPYLA7z16wK898sCfPSrAnz2iwJ89WsC7PVLAuz3KwIc9AsCHPbrARz1ywEc96sBnPSLAZz2awEM9EsBDPUrAQz2CwEM9+sAjPTLAIz1qwCM9osAjPdrAEz0SwBM9SsATPYLAEz38wPM9NMDzPWzA8z2kwPM93MDNPRTA7T0MwM09RMDtPXzAjT20wK09rMCNPeTArT3cwIE+u8ffzXfHQpAoH+1+vG9+W5BAEL9hACxfj6AYD8dQLSfDSDcTwYQ7+cCSPRTAWT6mQBS/UQAuX4egGQ/DUC2nwUg3U8CkO/nAOjopwDo6WcA6OonAOjrxwfo7IcH6O1HB+juBwfo78cGKOiHBqjoRwYo6QcGqOnHBSjqhwWo6kcFKOsHBajrxwQo7IcEqOxHBCjtBwSo7ccDKO6HA6juRwMo7wcDqO/HAligHwpgiX4ggM12JQ4QqHpsvwjAApPadoDNOnCBqgXudgmAUD8hQKyfDyDYTwcQ7WcDCPeTAcT7uQAS/VQAmX4mgFQ/EUCunwcg2U8DkO1nAUj3kwDk+zkAOvopAHr6GQC6+gkA+vrxATr74QF6+9EBuvvBAfr7sQEK+qEBKvqRAUr6gQFq+nEBivphAar6UQHK+kEB6voxAQr7IQEq+xEBSvsBAWr78QCK++EAqvvRAMr7wQDq+7EAFuiHAliiHwpgLQ6wFgf4BwVO0GnFfZGEAAAAAElFTkSuQmCC",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURT7O8Py9RPusEW6/SelORuMeEwC97OhDO3Lb9JPPeIO0RPmrP8Pw+vy3Mv3Nc8DjsdmxIe57dhrF7/7ks0dwTHYyU5kAAAAVdFJOU///////////////////////////ACvZfeoAAAOOSURBVHja7dppVttAEIVR48QYYhyIyf7XGmY8aKjqLh3nDW8BUn/3SP969ffau1uFd7fA61cGMIABDGAAAxjAAAYwgAEMYAADGMAABjCAAQxgAAMYwAAGMIABDGAAAxjAAAYwgAEMYAADGMAA/wNAdAYQBziIAxxutQEOt9oAL/3SAK/9ygBv/cIA7/26AB/9sgCf/aoAX/2iAN/9mgBH/ZIAx/2KACf9ggCn/XoAZ/1yAOf9agAX/WIAl/1aAAP9UgBD/UoAg/1CAMP9OgAj/TIAY/0qAKP9IgDj/RoAE/0SAFP9CgCT/QIA0/38ADP99ABz/ewAs/3kAPP93ACBfmqASD8zQKifGCDWzwsQ7KcFiPaDATzEx/kFZA5rAAMYwAAGMIABDGAAAxjAAAYwgAEMYAADGMAABjCAAQxgAAMYwAAGMIABDGAAAxjAAAYwgAEMkHnmn/h2vxfY8/OVAX7Gt7up3359Ez9s9EptCmB7VYD9OgOwyG91VYCXfmmA135lgLd+YYD3fl2Aj35ZgM9+VYCvflGA735NgKN+SYDjfkWAk35BgNN+PYCzfjmA8341gIt+MYDLfi2AgX4pgKF+JYDBfiGA4X4dgJF+GYCxfhWA0X4RgPF+DYCJfgmAqX4FgMl+AYDpfn6AmX56gLl+doDZfnKA+X5ugEA/NUCknxkg1E8MEOvnBQj20wJE+1kBwv2kAPF+ToBE//7pMbwHFIBE/3r960d49yAAqX5CgFw/H0Cynw4g288GkO4nA8j3cwE09FMBtPQzATT1EwG09fMANPbTALT2swA095MAtPdzAHT0UwD09DMAdPUTAPT14wN09sMD9PajA3T3gwP092MDFPRDA1T0IwOU9AMD1PTjAhT1wwJU9aMClPWDAtT1YwIU9kMCVPYjApT2AwLU9uMBFPfDAVT3owGU94MB1PdjASzQDwWwRD8QwHa3FgdIVD3FlwFY4EptHGC7SSxRtcDulwBI9RMC5Pr5AJL9dADZfjaAdD8ZQL6fC6ChnwqgpZ8JoKmfCKCtnwegsZ8GoLWfBaC5nwSgvZ8DoKOfAqCnnwGgq58AoK8fH6CzHx6gtx8doLsfHKC/HxugoB8aoKIfGaCkHxigph8XoKgfFqCqHxWgrB8UoK4fE6CwHxKgsh8RoLQfEKC2Hw+guB8OoLofDaC8Hwygvh8LYIF+KIAl+qEANuIAG3GAf8vqXCY+1p1jAAAAAElFTkSuQmCC",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURQC97G6/Sfy9RPusEelORuMeEz7O8OhDO++tNSzAy/3Odfy3MlG+c3Lb9IGqRO57dpPPeIW9REdwTMms5IMAAAATdFJOU////////////////////////wCyfdwIAAADVUlEQVR42u3aSVIbQBBE0RKykEDG2Nz/sBC2w2bQ0EN1KLLy9w3+i1zUouPF/AUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPe/pvunF23syBghzgADAGiDCGyDMAQIAa4AIb4AwBwgArAEivAHCHCAAsAaI8AYIc4AAwBogwhsgzAECAGuACG+AMAcIAKwBIrwBwhwgALAGiPAGCHOAAMAaIMIbIMwBwhzg/sYAz+3v7nHFuzXAt/Z3uMt/x+1DpL8ugP1NAY5bb4C3fiWAJf3OC/jdbwzwp98X4G+/EsBxRb/rAv71mwL87/cEeNdveQe873dcwId+Q4CP/X4An/rt7oDP/W4L+NJvBvC13wvgRL/VHXCq32kBJ/uNAE73+wCc6be5A871uyzgbL8JwPl+D4AL/RZ3wKV+hwVc7DcAuNxfH+BKf/k74Fp/9QVc7S8OcL2/NkBDf+k7oKW/8gKa+gsDtPXXBWjsL3sHtPZXXUBzf1GA9v6aAB39Je+Anv7t5nvzexBZQFf/9tem+YkA9PXXA+jsVwI4ruivtoDu/mIA/f21AAb6lQCW9FdawFB/IYCx/joAg/1l7oDR/ioLGO4vAjDeXwNgor/EHTDTX2EBU/0FAOb69QEm++XvgNl+9QVM94sDzPdrAyT0S98BGf3KC0jpFwbI6dcFSOqXvQOy+lUXkNYvCpDXrwmQ2C95B2T2Ky4gtV8QILdfDyC5X+4OyO5XW0B6vxhAfr8WwIJ+qTtgRb8QwP6wNQfoqDq0v00+wOMSgP2u4/3YrHitX2p/rgDo6l8E0PpWAPT11wPo7C8H0NtfDaC7vxhAf38tgIH+UgAj/ZUAhvoLAYz11wEY7C8DMNpfBWC4vwjAeH8NgIn+EgAz/RUApvoLAMz16wNM9ssDzParA0z3iwPM92sDJPRLA2T0KwOk9AsD5PTrAiT1ywJk9asCpPWLAuT1awIk9ksCZPYrAqT2CwLk9usBJPfLAWT3qwGk94sB5PdrASzolwJY0S8FsDMH2JkDvAJGcQcw/NqKIgAAAABJRU5ErkJggg=="

], 500);