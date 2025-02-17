const TestExample = ({ intValue }: { intValue: number }) => {
    const stringValue = "Hello, World";

    if (intValue === 0) {
        return (
            <div>
                {stringValue}
            </div>
        );
    } else {
        return (
            <div>
                {intValue}
            </div>
        );
    }
}

export default TestExample;