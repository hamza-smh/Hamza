indexCount = 1;

var equation = "";

function mathFuncCheck(value,trigFunc)
{
    var n = value.length;

    if((value[n-1]>='0' && value[n-1]<='9') || value[n-1]==')')
    {
        value+='*';
    }
    else if(value[n-1]=='*' && value[n-2]=='*')
    {
        value+='1';
        value+='*';
    }

    value+=trigFunc;
    return value;
}

function swapSign(value)
{
    var n = value.length;

    if(value[0] == '(')
    {
        indexCount++;
        if(indexCount==n)
        {
            indexCount = 1;
            return "";
        }
        else
        {
            return value[indexCount]+swapSign(value);
        }
    }
    else
    {
        return "(-"+value;
    }
}

function checkBracketForNum(value,num)
{   
    var n = value.length;

    if(value[n-1]==')')
    {
        value+='*';
    }
    
    value+=num;
    return value;
}

function checkforRightBracket(value)
{
    var n = value.length;

    if(value[n-1]=='(')
    {
        if(value[n-3]>=0 && value[n-3]<=9)
        {
            value+='1';
        }
        else if(value[n-2]=='n' || value[n-2]=='s' || value[n-4]=='e')
        {
            alert("Enter a value first before closing brackets!");
            return value;
        }
        else
        {
            value+='0';
        }
    }

    value+=')';
    return value;
}

function rightBracketEmptyCheck(value,display)
{
    var n = value.length;
    
    if(value[n-1]=='(')
    {
        return display;
    }
    else
    {
        display+=')';
        return display;
    }
}

function checkforLeftBracket(value)
{
    var n = value.length;
    // value[n-1]=='(' might have to add later/
    if((value[n-1]>='0' && value[n-1]<='9') || (value[n-1]==')'))
    {
        value+='*';
        value+='(';
    }
    else
    {
        value+='(';
    }

    return value;
}

function removeLastFromEQ(value)
{
    var n = value.length;
    var x = 2;

    var temp = value;

    if(temp[n-1]=='*' && temp[n-2]=='*')
    {
        n-=1;
        temp = "temp";
    }
    else if((temp[n-1]=='(' || temp[n-1]==')') && (temp[n-2]=='n' || temp[n-2]=='s' || temp[n-2]=='p'))
    {
        n-=8;
        temp = "temp";
    }
    else if(temp[n-1]=='(' && temp[n-2]=='t')
    {
        n-=9;
        temp = "temp";
    }
    else if(temp[n-1]=='(' && temp[n-2]=='*')
    {
        n-=1;
        temp = "temp";
    }
    else if(temp[n-1]=='(' && temp[n-4]=='g')
    {
        n-=10;
        temp = "temp";
    }

    if(value != "")
    {
        if(indexCount==n)
        {
            indexCount = 1;
            return "";
        }
        else
        {
            indexCount++;
            return value[indexCount-x] + removeLastFromEQ(value);
        }
    }
    else
    {
        return "";
    }
}

function solve(value,unsolvedDisplay)
{
    var n = value.length;

    var temp = value;

    var rightBracketCount = 0;
    var leftBracketCount = 0;

    if(value=="")
    {
        return;
    }
    else
    {
        for(i = n-1 ; i > -1 ; i--)
        {
            if(value[i]==')')
            {
                rightBracketCount++;
            }
            else if(value[i]=='(')
            {
                leftBracketCount++;
            }
        }
        
        while(leftBracketCount!=rightBracketCount)
        {
            value = checkforRightBracket(value);
            if(temp==value)
            {
                equation = value;
                return unsolvedDisplay;
            }
            rightBracketCount++;
        }
    }
    
    equation = value;
    return eval(value);
}

function removeLastFromDisplay(value)
{
    var n = value.length;
    var x = 2;

    var temp = value;

    if(temp[n-1]=='*' && temp[n-2]=='*')
    {
        n-=1;
        temp = "temp";
    }
    else if((temp[n-1]=='(' || temp[n-1]==')') && (temp[n-2]=='n' || temp[n-2]=='s'))
    {
        n-=3;
        temp = "temp";
    }
    else if(temp[n-1]=='(' && temp[n-2]=='^' && temp[n-3]=='e')
    {
        n-=2;
        temp = "temp";
    }
    else if(temp[n-1]=='(' && temp[n-2]=='g')
    {
        n-=3;
        temp = "temp";
    }

    if(value != "")
    {
        if(indexCount==n)
        {
            indexCount = 1;
            return "";
        }
        else
        {
            indexCount++;
            return value[indexCount-x] + removeLastFromDisplay(value);
        }
    }
    else
    {
        return "";
    }
}