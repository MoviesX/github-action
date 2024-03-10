export const getSum = (n:number):number => {
	return [...Array(n).keys()].reduce((a,b,) => {
		return a+(b+1);
	},0)
}