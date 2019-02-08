def get_unique_rooms(times):
    
    checkedTimes = []
    if len(times) > 0:
        rooms = 1
    else:
        return 0

    for time in times:
        itemCount = 0
        
        for item in time:
            if itemCount == 0:
                start = item
            else:
                end = item
            itemCount += 1

        for checked in checkedTimes:
            checkedItemCount = 0

            for checkedItem in checked:
                if checkedItemCount == 0:
                    checkedStart = checkedItem
                else:
                    checkedEnd = checkedItem
                checkedItemCount += 1
            
            if start >= checkedStart:
                if start <= checkedEnd:
                    rooms += 1
            
            if end >= checkedStart:
                if end <= checkedEnd:
                    rooms += 1
            
            if checkedStart >= start:
                if checkedStart <= end:
                    rooms += 1

            if checkedEnd >= start:
                if checkedEnd <= end:
                    rooms += 1

        checkedTimes + time


timesArray = [(30, 75), (0,50), (60, 150)]
print(get_unique_rooms(timesArray))